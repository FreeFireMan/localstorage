import React, {useEffect, useState} from 'react';
import './App.css';
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from './redux';

import {ON_USER_LOADED,} from './redux/action-types';

const PhotosList = () => {
  const dispatch = useDispatch();
  const users = useSelector(({usersReducer: {users} }) => users);
  const fetchPhotos = async () => {
    const resp = await fetch ('https://dummyapi.io/data/api/user?limit=10', {
      headers: {
        'app-id': 'lTE5abbDxdjGplutvTuc'
      }
    });
    const json = await resp.json();

    console.log(json)
    dispatch({type: ON_USER_LOADED, payload: json.data});
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>PhotosList</h1>
    </div>
  );
}

function App() {

  return (
    <Provider store={store}>
      <div>
        <PhotosList />
      </div>
    </Provider>
  );
}

export default App;