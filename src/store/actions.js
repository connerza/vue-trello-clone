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