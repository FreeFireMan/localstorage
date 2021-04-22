import React, {createContext, useContext, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import './App.css';

const TodoContext = createContext();

const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    if (!newTodo) {
      return alert('Error!');
    }
    setTodos([newTodo, ...todos]);
  }
  const [deleteItem, setDeleteItem] = useState([]);
  const [markItem, setMarkItem] = useState([]);
  const deleteTodo = (item) => {
    setDeleteItem([...deleteItem, item]);
    setTodos(todos.filter(todo => todo !== item));
    if (markItem.includes(item)) {
      setMarkItem(markItem.filter(value => value !== item));
    }
  }
  const markAs = (item) => {
    if (!markItem.includes(item)) {
      setMarkItem([...markItem, item]);
    } else {
      setMarkItem(markItem.filter(value => value !== item));
    }
  }
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteItem, deleteTodo, markItem, markAs,}}>
      {children}
    </TodoContext.Provider>
  );
}

const Header = () => {
  const {todos, markItem} = useContext(TodoContext);
  return (
    <header>
      <nav>
        <Link to={'/'}>List</Link>
        <Link to={'/create-todo'}>Add New Todo</Link>
      </nav>
      <div>
        <span>total: {todos.length}</span>
        <span>active: {todos.length - markItem.length}</span>
        <span>done: {markItem.length}</span>
      </div>
    </header>
  );
}

const TodoList = () => {
  const {todos, deleteItem, deleteTodo, markItem, markAs} = useContext(TodoContext);
  const filteredTodo = todos.filter(todo => !deleteItem.includes(todo));
  return (
    <div>
      <h1>Todo List</h1>
      {todos && (
        <> {
          filteredTodo.map(value => (
              <div key={value.title + value.descr} style={{
                textDecoration: markItem.includes(value) ? 'line-through' : ''
              }}>
                <h3>{value.title}</h3>
                <p>{value.descr}</p>
                <button onClick={() => markAs(value)}>
                  mark as {!markItem.includes(value) ? 'done' : 'active'}
                </button>
                <button onClick={() => deleteTodo(value)}>delete</button>
              </div>
            ))
        } </>
      )}
    </div>
  );
}

const AddTodo = () => {
  const [todoValues, setTodoValues] = useState({
    title: '',
    descr: '',
  });
  const {addTodo} = useContext(TodoContext);
  const changeTodoValues = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value});
  const addNewTodo = () => {
    addTodo(todoValues);
    setTodoValues({
      title: '',
      descr: '',
    });
  }
  return (
    <div>
      <h1>Add New Todo</h1>
      <input value={todoValues.title} onChange={changeTodoValues}
             type={'text'} name={'title'} placeholder={'title'} />
      <br />
      <input value={todoValues.descr} onChange={changeTodoValues}
             type={'text'} name={'descr'} placeholder={'descr'} />
      <br />
      <button onClick={addNewTodo}>add todo</button>
    </div>
  );
}

function App() {
  return (
    <TodoProvider>
      <div className={'App'}>
        <Router>
          <Header />
          <Switch>
            <Route path={'/'} exact>
              <TodoList />
            </Route>
            <Route path={'/create-todo'}>
              <AddTodo />
            </Route>
            <Route>
              <Redirect to={'/'} />
            </Route>
          </Switch>
        </Router>
      </div>
    </TodoProvider>
  );
}

export default App;
