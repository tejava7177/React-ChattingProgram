import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import{Provider} from 'react-redux';      //redux 연결
import{createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducer from './redux/reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore);    
//object 뿐만 아니라 function, promise도 접근 할 수 있는 Middleware 생성

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={createStoreWithMiddleware(         //redux에 store를 생성
        Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__&&             //redux를 편하게 사용할 수 있는 tools
        window.__REDUX_DEVTOOLS_EXTENSION__()
        )}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
