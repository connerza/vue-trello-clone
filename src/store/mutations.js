export function receiveBoards(state, payload) {
  state.boards = {...state.boards, ...payload.boards}
}

export function receiveTeams(state, payload) {
  state.teams = {...state.teams, ...payload.teams}
}

export function receiveAllLists(state, payload) {
  state.lists = {...state.lists, ...payload.lists}
}