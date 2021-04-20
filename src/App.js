import React, {Component, useEffect, useState} from "react";
import './App.css';

// let interval;
// const Comp = () => {
//   useEffect(() => {
//     interval = setInterval(() => {
//       console.log('setInterval')
//     }, 2000);
//
//     return () => {
//       clearInterval(interval);
//     };
//   }, []);
//
//   return (
//     <h1>child</h1>
//   );
// }
//
// function App() {
//   const [counter, setCounter] = useState(0);
//
//   const incCounter = () => {
//     setCounter(counter + 1);
//   }
//
//   useEffect(() => {
//     console.log('did mount parent');
//   }, []);
//
//   useEffect(() => {
//     console.log('did update parent');
//   }, [counter]);
//
//   return (
//     <div className="App">
//       <h1 onClick={incCounter}>Hello React {counter}</h1>
//       {!!(counter % 2) && <Comp />}
//     </div>
//   );
// }

// let interval;
// class Comp extends Component {
//   componentDidMount() {
//     interval = setInterval(() => {
//       console.log('setInterval')
//     }, 2000);
//
//     console.log('componentDidMount child')
//   }
//
//   componentWillUnmount() {
//     clearInterval(interval);
//     console.log('componentWillUnmount child')
//   }
//
//   render() {
//     console.log('rerender child');
//     return (
//       <h1>child</h1>
//     );
//   }
// }
//
// class App extends Component {
//   state = {
//     counter: 0
//   }
//
//   componentDidMount() {
//     console.log('componentDidMount')
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     console.log('componentDidUpdate')
//   }
//
//   incCounter = () => {
//     this.setState({counter: this.state.counter + 1});
//   }
//
//   render() {
//     console.log('rerender parent');
//     return (
//       <>
//         <h1 onClick={this.incCounter}>Hello React {this.state.counter}</h1>
//
//         {!!(this.state.counter % 2) && <Comp />}
//       </>
//     );
//   }
// }

const URL = 'https://jsonplaceholder.typicode.com/todos/';

function App() {
  const [counter, setCounter] = useState(1);
  const [todo, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    setIsLoading(true);
    const resp = await fetch(`${URL}${counter}`);
    const data = await resp.json();

    setTodo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
    
    return () => {
      setTodo(null);
    }
  }, [counter]);

  const incCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <div className='App'>
      <h1 onClick={incCounter}>Hello React {counter}</h1>
      {!todo && isLoading && (<h1>LOADING...</h1>)}
      {!!todo && (
        <h3>{todo.title} - {todo.completed.toString()} - {todo.id}</h3>
      )}
    </div>
  );
}

export default App;
