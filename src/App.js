import React, {Component, useState} from "react";
import './App.css';

const Header = ({counter}) => {

  return (
      <h2>{counter}</h2>
  );
}

const TodoItem = ({todo}) => {
  return (
    <div>
      {todo.title} - {todo.descr} <hr />
    </div>
  );
}

function App() {
   const [state, setState] = useState({
    counter: 0,
    add: 3,
    isHeaderVisible: true,
    todos: [
      {id: 1, title: 'Hello', descr: 'React'},
      {id: 2, title: 'Bye', descr: 'React'},
      {id: 3, title: 'Test', descr: 'React'},
    ],
  })

  const incHandler = () => {
    setState({
      ...state,
      counter: state.counter + 1 + state.add,
      add: state.add + 2,
    })
  }

  const toggleHeader = () => {
    setState({
      ...state,
      isHeaderVisible: !state.isHeaderVisible,
    })
  }

  const changeSmthInTodo = () => {
    let newArr = [...state.todos];
    newArr[0].title = Math.random();
    setState({
      ...state,
      todos: newArr,
    })
  }

  const {isHeaderVisible, counter, todos} = state;

  return (
    <div className="App">
        {isHeaderVisible && <Header counter={counter}/>}

      <button onClick={incHandler}>inc</button>
      <button onClick={toggleHeader}>toggle header</button>
      <button onClick={changeSmthInTodo}>change smth in todo</button>

      {todos.map(value => <TodoItem key={value.id} todo={value} />)}
    </div>
  );
}

// class App extends Component {
//   state = {
//     counter: 0,
//     isHeaderVisible: true,
//     todos: ['hello', 'react'],
//   }
//
//   incHandler = () => {
//     this.setState({counter: this.state.counter + 1});
//   }
//
//   toggleHeader = () => {
//     this.setState({isHeaderVisible: !this.state.isHeaderVisible});
//   }
//
//   changeSmthInTodo = () => {
//     let newArr = [...this.state.todos];
//     newArr[0] = Math.random();
//     this.setState({todos: newArr});
//   }
//
//   render() {
//     const {isHeaderVisible, counter, todos} = this.state;
//     return (
//       <div className="App">
//           {isHeaderVisible && <Header counter={counter}/>}
//
//         <button onClick={this.incHandler}>inc</button>
//         <button onClick={this.toggleHeader}>toggle header</button>
//         <button onClick={this.changeSmthInTodo}>change smth in todo</button>
//
//         <div>{todos[0]}</div>
//         <div>{todos[1]}</div>
//       </div>
//     );
//   }
// }

export default App;
