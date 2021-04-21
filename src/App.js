import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router, Switch, Route, Link, Redirect,
  useParams, useHistory,
} from "react-router-dom";
import './App.css';

const Home = () => {

  return (
    <h2>Home</h2>
  );
}
const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
      const resp = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const json = await resp.json();

      setPosts(json);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Switch>
        <Route path={'/posts/:id'}>
          <PostDetails />
        </Route>
      </Switch>

      <h2>Posts List</h2>

      {
        posts.map(post => <Link to={`/posts/${post.id}`} key={post.id}>
          <p>{post.title} - {post.id}</p>
        </Link>)
      }
    </div>
  );
}
const Comments = () => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/comments/');
    const json = await resp.json();

    setComments(json);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <Switch>
        <Route path={'/comments/:id'}>
          <CommentDetails />
        </Route>
      </Switch>

      <h2>Comments List</h2>

      {
        comments.map(comment => <Link to={`/comments/${comment.id}`} key={comment.id}>
          <p>{comment.name} - {comment.id}</p>
        </Link>)
      }
    </div>
  );
}
const Albums = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/albums/');
    const json = await resp.json();

    setAlbums(json);
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <Switch>
        <Route path={'/albums/:id'}>
          <AlbumDetails />
        </Route>
      </Switch>

      <h2>Albums List</h2>

      {
        albums.map(album => <Link to={`/albums/${album.id}`} key={album.id}>
          <p>{album.title} - {album.id}</p>
        </Link>)
      }
    </div>
  );
}

const PostDetails = () => {
  const [post, setPost] = useState();
  const {id} = useParams();

  const fetchPost = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const json = await resp.json();

    setPost(json);
  }

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div>
      {post && (<div>
        <h3>{post.title} - {post.id}</h3>
        <p>{post.body}</p>
      </div>)}
    </div>
  );
}
const CommentDetails = () => {
  const [comment, setComment] = useState();
  const {id} = useParams();

  const fetchComment = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const json = await resp.json();

    setComment(json);
  }

  useEffect(() => {
    fetchComment();
  }, [id]);

  return (
    <div>
      {comment && (<div>
        <h3>{comment.name} - {comment.id}</h3>
        <p>{comment.body}</p>
      </div>)}
    </div>
  );
}
const AlbumDetails = () => {
  const [album, setAlbum] = useState();
  const {id} = useParams();

  const fetchAlbum = async () => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
    const json = await resp.json();

    setAlbum(json);
  }

  useEffect(() => {
    fetchAlbum();
  }, [id]);

  return (
    <div>
      {album && (<div>
        <h3>{album.title} - {album.id}</h3>
      </div>)}
    </div>
  );
}

function App() {

  return (
    <Router>
      <div className={'App'}>
        <nav>
          <ul>
            <li> <Link to={'/'}>Home</Link> </li>
            <li> <Link to={'/posts'}>Posts</Link> </li>
            <li> <Link to={'/comments'}>Comments</Link> </li>
            <li> <Link to={'/albums'}>Albums</Link> </li>
          </ul>
        </nav>

        <Switch>
          <Route path={'/'} exact>
            <Home />
          </Route>
          <Route path={'/posts'}>
            <Posts />
          </Route>
          <Route path={'/comments'}>
            <Comments />
          </Route>
          <Route path={'/albums'}>
            <Albums />
          </Route>
          <Route>
            <Redirect to={'/'} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
