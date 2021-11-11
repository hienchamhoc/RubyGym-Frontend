import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import appReducers from './store/reducers';

const store = createStore(
  appReducers
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
=======
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
>>>>>>> 05ddadc622ee7547456bb38cf5927f9c79a0a14b
  document.getElementById('root')
);

reportWebVitals();
