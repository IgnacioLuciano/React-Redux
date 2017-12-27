import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './counter.js';

const initialState = {
    count = 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'RESET':
            return { ...state, count: 0 };

        case 'INCREMENT':
            return { ...state, count: state.count + 5 };

        case 'INCREMENT2':
            return { ...state, count: state.count + 10 };

        case 'DECREMENT':
            return { ...state, count: state.count - 2 };

        case 'DECREMENT2':
            return { ...state, count: state.count - 7 };

        default:
            return state;
    }
}

const store = createStore(reducer);

const RenderApp = () => {

    ReactDOM.render(
        <Counter
            count={store.getState().count1}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onIncrement2={() => store.dispatch({ type: 'INCREMENT2' })}
            onReset={() => store.dispatch({ type: 'RESET' })}
            onDecrement={() => store.dispatch({ type: "DECREMENT" })}
            onIncrement2={() => store.dispatch({ type: 'DECREMENT2' })}

        />,
        document.getElementById('root')
    )
};

store.subscribe(() => {
    console.log("State Value: ", store.getState());
    renderApp();
}
);

renderApp();