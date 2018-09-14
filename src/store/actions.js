import * as api from '../api'

export function getAllTeams({ commit, state }) {
  if (Object.keys(state.boards).length <= 0) {
    return api.getTeams().then(teams => {
      commit('receiveTeams', {
        teams
      });
    }) 
  } else {return Promise.resolve()}
}

export function getBoardsByTeamId({ commit, state, dispatch, getters }, teamId) {
  if (getters.boardsByTeamId(teamId).length <= 0) {
    return api.getBoardsByTeamId(teamId).then(boards => {
      commit('receiveBoards', {
        boards
      });
    }) 
  } else {return Promise.resolve()}
}