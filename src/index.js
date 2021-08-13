import React from 'react';
import ReactDOM from 'react-dom';
// 1. Set up connection to redux
import {createStore} from 'redux';
//import reducer from './reducers/titleReducer';
import reducer from './reducers/'
import { Provider } from 'react-redux';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';

// 2. set up store
const store = createStore(reducer);
console.log("store:", store.getState());

function App() {
  return (
    //4. wrap the app with Provider. link the store.
    //<Provider store={store}>
    <div className="App">
      <Title />
      <DragonList />
    </div>
    //</Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
