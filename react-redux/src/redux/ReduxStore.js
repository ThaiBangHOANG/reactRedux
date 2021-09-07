const reducer = (state = 5) => {
  return state;
};

let store = Redux.createStore(reducer);

// another way to get the state of redux

const store = Redux.createStore((state = 5) => state);

const currentState = store.getState();
