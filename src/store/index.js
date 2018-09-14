import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex)

const state = {
  teams: {
    /*
      id: {
        id,
        name,
        description,
        profileImage,
        members,
        boardIds
      }
    */
  },
  boards: {
    /*
      id: {
        id,
        teamId,
        listIds
      }
    */
  },
  lists: {
    /*
      id: {
        id,
        boardId,
        teamId,
        taskIds,
      }
    */
  },
  tasks: {
    /*
      id: {
        id,
        listId,
        boardId,
        teamId,
        title,
        description,
        asignee,
        created,
        due,
        comments
      }
    */
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
