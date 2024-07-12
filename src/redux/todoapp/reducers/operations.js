import { ADD_TASK, DELETE_ALL, REMOVE_TASK, UPDATE_TASK } from "../actions";

const initialState = [];
// it holds all the functionalities
export const operations = (state = initialState, action) => {
  switch (action.type) {
    // addition
    case ADD_TASK:
      return [...state, action.payload];
    //   deletion
    case DELETE_ALL:
      return [];
    //   removal
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload);
    //   updation
    case UPDATE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    default:
      return state;
  }
};
