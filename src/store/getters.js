export const boardsByTeamId = state => teamId => {
  return Object.values(state.boards).filter(board =>
    state.teams[teamId] && (state.teams[teamId].boards.indexOf(board.id) >= 0)
  )
};

export const allTeams = state => Object.values(state.teams);
