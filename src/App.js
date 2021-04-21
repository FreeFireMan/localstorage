import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect,
  useRouteMatch, useParams, useLocation, useHistory,
} from 'react-router-dom';
import './App.css';

/*function App() {

  return (
    <div className={'App'}>
      <Router>
        <nav>
          <ul>
            <li> <Link to={'/'}>Home</Link> </li>
            <li> <Link to={'/users'}>Users</Link> </li>
            <li> <Link to={'/about'}>About</Link> </li>
            <li> <Link to={'/test'}>Test</Link> </li>
          </ul>
        </nav>

        <Switch>
          <Route path={'/'} component={Home} exact />
          <Route path={'/users'} render={(args) => {
            console.log(args);
            return <Users />
          }} />
          <Route path={'/about'}>
            {About}
          </Route>
          <Route path={'/test'}>
            <Test />
          </Route>

          <Route>
            <Redirect to={'/'} />
          </Route>

          <Route>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <h1>Home</h1>
  );
}
const Users = () => {
  return (
    <h1>Users</h1>
  );
}
const About = () => {
  return (
    <h1>About</h1>
  );
}
const Test = () => {
  return (
    <h1>Test</h1>
  );
} */

function App() {

  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li> <Link to={'/'}>Home</Link> </li>
            <li> <Link to={'/posts'}>Posts</Link> </li>
          </ul>
        </nav>

        <Switch>
          <Route path={'/'} component={Home} exact />
          <Route path={'/posts'}>
            <Posts />
          </Route>
          <Route>
            <Redirect to={'/'} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <h1>Home</h1>
  );
}

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await resp.json();

      setPosts(json);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Switch>
        <Route path={'/posts/:id'} exact>
          <PostDetails />
        </Route>
        <Route>
          <Redirect to={'/posts'} />
        </Route>
      </Switch>

      <h1>Posts</h1>

      <ul>
        {
          posts.map(value => <Link to={`/posts/${value.id}`} key={value.id}>
            <li>{value.title} - {value.id}</li>
          </Link>)
        }
      </ul>
    </div>
  );
}

const PostDetails = (props) => {
  const [post, setPost] = useState();
  const math = useRouteMatch();
  const {id} = useParams();
  const location = useLocation();
  const history = useHistory();

  const fetchPosts = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await resp.json();

    setPost(json);
  }

  useEffect(() => {
    fetchPosts();
  }, [id]);

  return (
    <div>
      <h1>Posts Detalis</h1>

      {post && ( <div key={post.id}>
        <h3>{post.title} - {post.id}</h3>
        <p>{post.body}</p>

        <button onClick={() => history.push(`/posts/${post.id + 1}`)}>go to next page</button>
      </div> )}
    </div>
  );
}

export default App;
