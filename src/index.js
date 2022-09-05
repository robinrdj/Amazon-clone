import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './components/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <div>
  <Provider store={store}>
  <App />
  </Provider>
  </div>,document.getElementById("root")
);

