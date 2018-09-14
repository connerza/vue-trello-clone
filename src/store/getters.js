export const boardsByTeamId = state => teamId => {
  return Object.entries(state.boards).filter((boardId, board) =>
    boardId in this.state.teams[teamId].boards
  ).map((boardId,board) => board);
};