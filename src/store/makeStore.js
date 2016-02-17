import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';

export default function thunkMiddleware({ dispatch, getState }) {
  return (next => 
     action => 
       typeof action === 'function' ? 
         action(dispatch, getState) : 
         next(action)
  );
};

export default function makeStore(initialState) {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
}
