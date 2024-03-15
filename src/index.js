import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store.ts';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { Routes, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SamuraiJsApp from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SamuraiJsApp/>
);


reportWebVitals();

