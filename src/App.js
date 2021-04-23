import React, {useEffect, useState} from 'react';
import './App.css';
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from './redux';

import {onUsersLoaded, onAddToBad, onRemoveFromBad} from './redux/action-creators';

const PhotosList = () => {
  const dispatch = useDispatch();
  const users = useSelector(({usersReducer: {users} }) => users);
  const badEmployees = useSelector(({usersReducer: {badEmployees} }) => badEmployees);

  const fetchPhotos = async () => {
    const resp = await fetch ('https://dummyapi.io/data/api/user?limit=10', {
      headers: {
        'app-id': 'lTE5abbDxdjGplutvTuc'
      }
    });
    const json = await resp.json();

    dispatch(onUsersLoaded(json.data));
  }

  useEffect(() => {
    if (!users.length) {
      fetchPhotos();
    }
  }, []);

  return (
    <div>
      <h1>PhotosList</h1>
      {
        users.map(el => <img
          style={{
            filter: badEmployees.includes(el.id) ? 'blur(3px)' : ''
          }}
          onClick={() => {
            const alreadyInList = badEmployees.includes(el.id);
            const answer = !badEmployees.includes(el.id) && window.confirm('Are you sure?');
            if (answer) {
              return dispatch(onAddToBad(el.id));
            }
            alreadyInList && dispatch(onRemoveFromBad(el.id));
          }}
          key={el.id} src={el.picture} alt={el.firstName} />)
      }
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