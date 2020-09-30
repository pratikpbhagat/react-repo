const redux = require('redux');
const createStore = redux.createStore;

const initalState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initalState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// Store
const store = createStore(rootReducer);

console.log(store.getState());

// Subsrciption
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatch Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });

console.log(store.getState());
