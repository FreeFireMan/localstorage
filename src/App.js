import React, {useEffect, useState} from "react";
import './App.css';

/*
потрібно створити логіку, яка задовільнить наступні вимоги
в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users)
дефолтно обрана таба- пости
по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
лише 1 список видимий одночасно
потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...
 */

const PostsList = (props) => {
  const {id, title, body} = props;

  return (
    <div>
      <h3>{id} - {title}</h3>
      <p>{body}</p>
      <hr />
    </div>
  );
}

const CommentsList = (props) => {
  const {id, name, body} = props;

  return (
    <div>
      <h3>{id} - {name}</h3>
      <p>{body}</p>
      <hr />
    </div>
  );
}
const AlbumsList = (props) => {
  const {id, title} = props;

  return (
    <div>
      <h3>{id} - {title}</h3>
      <hr />
    </div>
  );
}

const PhotosList = (props) => {
  const {id, title, url} = props;

  return (
    <div>
      <h3>{id} - {title}</h3>
      <p>{url}</p>
      <hr />
    </div>
  );
}

const TodosList = (props) => {
  const {id, title, completed} = props;

  return (
    <div>
      <h3>{id} - {title}</h3>
      <p>{completed}</p>
      <hr />
    </div>
  );
}
const UsersList = (props) => {
  const {id, name} = props;

  return (
    <div>
      <h3>{id} - {name}</h3>
      <hr />
    </div>
  );
}

const URL = 'https://jsonplaceholder.typicode.com/';

function App() {
  const [btn, setBtn] = useState('posts');
  const [list, setList] = useState([]);

  const fetchSmth = async () => {
    const resp = await fetch(`${URL}${btn}`);
    const data = await resp.json();

    setList(data);
  }

  useEffect(() => {
    fetchSmth();
  }, [btn]);

  const choiceBtn = (e) => {
    const {target: {name}} = e;
    setBtn(name);
  }

  return (
    <div className='App'>
      <button onClick={choiceBtn} name={'posts'}>Posts</button>
      <button onClick={choiceBtn} name={'comments'}>Comments</button>
      <button onClick={choiceBtn} name={'albums'}>Albums</button>
      <button onClick={choiceBtn} name={'photos'}>Photos</button>
      <button onClick={choiceBtn} name={'todos'}>Todos</button>
      <button onClick={choiceBtn} name={'users'}>Users</button>

      {btn === 'posts' && (
        <>
          <h1>Posts List</h1>
          {list.map(value => (<PostsList key={value.id} id={value.id} title={value.title} body={value.body}/>))}
        </>
      )}
      {btn === 'comments' && (
        <>
          <h1>Comments List</h1>
          {list.map(value => (<CommentsList key={value.id} id={value.id} name={value.name} body={value.body}/>))}
        </>
      )}
      {btn === 'albums' && (
        <>
          <h1>Albums List</h1>
          {list.map(value => (<AlbumsList key={value.id} id={value.id} title={value.title}/>))}
        </>
      )}
      {btn === 'photos' && (
        <>
          <h1>Photos List</h1>
          {list.map(value => (<PhotosList key={value.id} id={value.id} title={value.title} url={value.url}/>))}
        </>
      )}
      {btn === 'todos' && (
        <>
          <h1>Todos List</h1>
          {list.map(value => (<TodosList key={value.id} id={value.id} title={value.title} completed={value.completed}/>))}
        </>
      )}
      {btn === 'users' && (
        <>
          <h1>Users List</h1>
          {list.map(value => (<UsersList key={value.id} id={value.id} name={value.name}/>))}
        </>
      )}
    </div>
  );
}

export default App;
