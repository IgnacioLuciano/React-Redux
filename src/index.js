import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './counter.js';
import { connect, Provider } from "react-redux";


const initialState = {
    count : 0
}
const mapStateToProps = (state) => { return { count: state.count } }
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        // onIncrement2 : () => dispatch({ type: 'INCREMENT2' }),
        onReset : () => dispatch({ type: 'RESET' }),
        onDecrement : () => store.dispatch({ type: "DECREMENT" }),
        // onIncrement2 : () => store.dispatch({ type: 'DECREMENT2' }),
    }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'RESET':
            return { ...state, count: 0 };

        case 'INCREMENT':
            return { ...state, count: state.count + 5 };

        // case 'INCREMENT2':
            // return { ...state, count: state.count + 10 };

        case 'DECREMENT':
            return { ...state, count: state.count - 2 };

        // case 'DECREMENT2':
            // return { ...state, count: state.count - 7 };

        default:
            return state;
    }
}

const store = createStore(reducer);

    ReactDOM.render(
        <Provider store={store}>
           <ConnectedCounter />
        </Provider>,

        document.getElementById('root')
    )
