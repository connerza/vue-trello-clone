<template>
  <v-dialog 
    v-model="open"
    persistent
    max-width="50%">
    <v-card>
      <v-card-title>
        <div class="headline">{{ task.name }}</div>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12>
              <v-text-field 
                label="Task Description" 
                auto-grow
                v-model="task.description"/>
            </v-flex>
            <v-flex 
              xs12 
              sm6 
              md4>
              <v-text-field 
                label="Assignee" 
                v-model="task.assignee"/>
            </v-flex>
            <v-flex 
              xs12 
              sm6 
              md4>
              <v-select 
                :items="boardLists.map(l => l.name)"
                label="List"
                v-model="selectedListName"/>
            </v-flex>
            <v-flex 
              xs12 
              sm6 
              md4>
              <v-text-field 
                label="Created" 
                v-model="task.created"/>
            </v-flex>
            <v-flex 
              xs12 
              sm6 
              md4>
              <v-text-field 
                label="Due" 
                v-model="task.due"/>
            </v-flex>
            <v-flex xs12>
              <v-list>
                <v-subheader>Comments</v-subheader>
                <v-list-tile
                  v-for="(c,i) of task.comments"
                  :key="i">
                  <v-list-tile-content>
                    <v-list-tile-title v-html="c" />
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn @click.native="leaveClick(true)">Submit</v-btn>
        <v-btn @click.native="leaveClick(false)">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'TaskModal',
  data: function () {
    return {
      open: true,
      selectedListName: ''
    }
  },
  props: {
    modalTaskId: {
      type: Number,
      default: -1
    },
    boardLists: {
      type: Array,
      default: function () {
        return []
      }
    },
    currListId: {
      type: Number,
      default: -1
    }
  },
  mounted: function () {
    const foundList = this.boardLists.find(l => 
    l.id === this.currListId)
    this.selectedListName = foundList ? foundList.name : ''
  },
  computed: {
    task: function () { 
      return this.$store.state.tasks[this.modalTaskId]
    },
    selectedList: function () {
      return this.boardLists.find(l => l.name === this.selectedListName)
    }
  },
  methods: {
    leaveClick: function(submit) {
      if (submit) {
        const newListId = this.boardLists.find(l => 
          l.name === this.selectedListName).id;

        this.$store.dispatch('updateTaskList', {
          updatedTask: this.task,
          oldListId: this.currListId,
          newListId: newListId
        });
      }
      this.$emit('close-modal');
    }
  }
}
</script>
