import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Navigation from '../Navigation';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

import logo from './logo.svg';
import './App.css';

const App = () => ( <
  Router >
  <
  Navigation / >
  <
  /Router>
);


// function App() {
//   return ( <
//     div className = "App" >
//     <
//     header className = "App-header" >
//     <
//     img src = {
//       logo
//     }
//     className = "App-logo"
//     alt = "logo" / >
//     <
//     p >
//     Edit < code > src / App.js < /code> and save to reload. <
//     /p> <
//     a className = "App-link"
//     href = "https://reactjs.org"
//     target = "_blank"
//     rel = "noopener noreferrer" >
//     Learn React <
//     /a> <
//     /header> <
//     /div>
//   );
// }

export default App;