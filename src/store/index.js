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
        boards
      }
    */
  },
  boards: {
    /*
      id: {
        id,
        name,
        description,
        lists
      }
    */
  },
  lists: {
    /*
      id: {
        id,
        name,
        tasks
      }
    */
  },
  tasks: {
    /*
      id: {
        id,
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
