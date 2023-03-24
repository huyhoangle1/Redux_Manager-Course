
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import App from './App';
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer);
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>
);

