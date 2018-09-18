import * as api from '../api'

export function getAllTeams({ commit, getters }) {
  if (getters.allTeams.length <= 0) {
    return api.getTeams().then(teams => {
      commit('receiveTeams', {
        teams
      });
    })
  } else { return Promise.resolve() }
}

export function getBoardsByTeamId({ commit, getters }, teamId) {
  if (getters.boardsByTeamId(teamId).length <= 0) {
    return api.getBoardsByTeamId(teamId).then(boards => {
      commit('receiveBoards', {
        boards
      });
    }) 
  } else { return Promise.resolve() }
}

export function getAllBoards({ commit, getters }) {
  if (getters.allBoards.length <= 0) {
    return api.getAllBoards().then(boards => {
      commit('receiveBoards', {
        boards
      });
    })
  } else { return Promise.resolve() }
}

export function getAllLists({ commit, state }) {
  if (Object.values(state.lists).length <= 0) {
    return api.getAllLists().then(lists => {
      commit('receiveAllLists', {
        lists
      });
    })
  } else { return Promise.resolve(); }
}

export function getAllTasks({ commit, state }) {
  if (Object.values(state.tasks).length <= 0) {
    return api.getAllTasks().then(tasks => {
      commit('receiveAllTasks', {
        tasks
      });
    })
  } else { return Promise.resolve(); }
}