export function receiveBoards(state, payload) {
  state.boards = {...state.boards, ...payload.boards}
}

export function receiveTeams(state, payload) {
  state.teams = {...state.teams, ...payload.teams}
}

export function receiveAllLists(state, payload) {
  state.lists = {...state.lists, ...payload.lists}
}

export function receiveAllTasks(state, payload) {
  state.tasks = {...state.tasks, ...payload.tasks}
}

export function updateTask(state, payload) {
  state.tasks[payload.task.id] = payload.task
}

export function removeTaskFromList(state, payload) {
  state.lists[payload.listId].tasks.splice(
    state.lists[payload.listId].tasks.indexOf(payload.taskId),
    1
  );
}

export function addTaskToList(state, payload) {
  state.lists[payload.listId].tasks.push(payload.taskId)
}