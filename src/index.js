import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';
import {Provider} from 'react-redux';
import makeStore from './store/makeStore';

ReactDOM.render(
  <Provider store={makeStore()}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
