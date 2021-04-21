import React, {createContext, useContext, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

/*const CounterContext = createContext();

const ContextProvider = ({children}) => {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1);
  }
  const decCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <CounterContext.Provider value={{counter, incCounter, decCounter}}>
      {children}
    </CounterContext.Provider>
  );

}

const Counter = () => {
  const {counter, incCounter, decCounter} = useContext(CounterContext);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={incCounter}>inc</button>
      <button onClick={decCounter}>dec</button>
    </div>
  );
}

const Header = () => {
  const {counter, incCounter} = useContext(CounterContext);

  return (
    <div>
      <h1 onClick={incCounter}>Header counter: {counter}</h1>
    </div>
  );
}

function App() {

  return (
    <ContextProvider>
      <Header />
      <Counter />
    </ContextProvider>
  );
} */

const TodoContext = createContext();

const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  const onTodoCreate = (newTodo) => {
    if (!newTodo) return;

    setTodos([newTodo, ...todos]);
  }

  return (
    <TodoContext.Provider value={{
      todos,
      onTodoCreate,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

const TodoItem = ({todo}) => {

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.descr}</p>
    </div>
  );
}

const TodoList = () => {
  const {todos} = useContext(TodoContext);

  return (
    <div>
      <h1>Todo List</h1>

      {todos.map(value => <TodoItem key={value.title + value.descr} todo={value} />)}
    </div>
  );
}
const AddTodo = () => {
  const [todoValues, setTodoValues] = useState({
    title: '',
    descr: '',
  });

  const {onTodoCreate,} = useContext(TodoContext);

  const onTodoChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value});

  const onCreate = () => {
    onTodoCreate(todoValues);

    setTodoValues({
      title: '',
      descr: '',
    });
  }

  return (
    <div>
      <h1>Add New Todo</h1>

      <input value={todoValues.title} onChange={onTodoChange}
             type={'text'} name={'title'} placeholder={'title'}/>
      <br />
      <input value={todoValues.descr} onChange={onTodoChange}
             type={'text'} name={'descr'} placeholder={'descr'}/>
      <br />
      <button onClick={onCreate}>add todo</button>
    </div>
  );
}

const Header = () => {

  return (
    <header>
      <Link to={'/'}>List</Link>
      <br />
      <Link to={'/create-todo'}>Add New Todo</Link>
    </header>
  );
}

function App() {

  return (
    <TodoProvider>
      <div>
        <Router>
          <Header />

          <Switch>
            <Route path={'/'} exact>
              <TodoList />
            </Route>

            <Route path={'/create-todo'}>
              <AddTodo />
            </Route>
          </Switch>
        </Router>
      </div>
    </TodoProvider>
  );
}

export default App;
