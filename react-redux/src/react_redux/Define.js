const ADD = "ADD";
const addMessage = (message) => {
  return {
    type: ADD,
    message,
  };
};

const messageReducer = (beforeState = [], action) => {
  switch (action.type) {
    case ADD:
      return [...beforeState, action.message];
      break;
    default:
      return beforeState;
  }
};

const store = Redux.createStore(messageReducer);
