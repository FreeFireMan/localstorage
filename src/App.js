import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from './redux';
import Header from './components/Header';
import Products from './components/Products';

function App() {

  return (
    <Provider store={store}>
      <div className={'App'}>
        <Header />
        <Products />
      </div>
    </Provider>
  );
}

export default App;