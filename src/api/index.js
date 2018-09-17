import { boards, teams } from "./mock-data";

const latency = 11;

function asyncify(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, latency);
  });
}

export const getBoardsByTeamId = function (teamId) {
  const teamBoards = Object.entries(boards).reduce((acc,entry) => {
    if (entry[0] in teams[teamId].boards) {
      return acc.concat([entry[1]]);
    } else {
      return acc;
    }
  }, []);
  return asyncify(teamBoards);
};

export const getAllBoards = () => asyncify(boards);

export const getTeams = () => asyncify(teams);