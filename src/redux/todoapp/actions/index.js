export const ADD_TASK = "ADD_TASK";
export const DELETE_ALL = "DELETE_ALL";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
// for adding action
export const addtask = (task) => ({
  type: ADD_TASK,
  payload: task,
});
// for deleting action
export const deletetask = () => ({
  type: DELETE_ALL,
});
// for removing all the tasks action
export const removetask = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});
// for updating the selected task
export const updatetask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});
