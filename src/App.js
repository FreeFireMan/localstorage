import React, {Component, createRef, useEffect, useRef, useState} from "react";
import './App.css';

/*
створти 2 інтупи і кнопку
перший відповідає за ендпоінт джсон плейсхолдера (перша частина енпоніту) другий- за айдішнік
якщо другого ендпоінту нема- тягнемо весь список
потрібно зробити валідацію на перший інпут- чи ендпоінт існуючий на другий- чи це число і чи воно в рамках 1-100
зробити версію на функціональній компоненті  контрольовану і не контрольовану
якщо є час- на класовій компоненті теж таке саме написати
*/
/*
inputs (for each create 2 versions- class based and functional based)
create controlled and uncontrolled select component
create controlled and uncontrolled checkbox
create controlled and uncontrolled radio
 */

const URL = 'https://jsonplaceholder.typicode.com';
const listEndpoints = ['posts', 'comments', 'albums', 'todos'];

// control
/*function App() {
  const [inputs, setInputs] = useState({
    endpoint: '',
    id: '',
  });
  const [list, setList] = useState([]);
  const [item, setItem] = useState(null);

  const fetchList = async () => {
    const resp = await fetch(`${URL}/${inputs.endpoint}/${inputs.id}`);
    const json = await resp.json();

    !!inputs.id ? setItem(json) : setList(json);
  }

  const updateUserChoice = (e) => {
    const {target: {name, value}} = e;
    setInputs({...inputs, [name]: value});
  }

  const onSubmit = () => {
    if (!listEndpoints.includes(inputs.endpoint)) {
      setInputs({...inputs, endpoint: ''});
      return alert('Error!');
    }
    if ((!Number(inputs.id) || Number(inputs.id) < 1 || Number(inputs.id) > 100) && inputs.id !== '') {
      setInputs({...inputs, id: ''});
      return alert('Error!');
    }
    fetchList();
  }

  return (
    <div className='App'>
      <input value={inputs.endpoint} onChange={updateUserChoice}
             type={'text'} name={'endpoint'} placeholder={'endpoint'} />
      <input value={inputs.id} onChange={updateUserChoice}
             type={'text'} name={'id'} placeholder={'id'} />
      <button onClick={onSubmit}>submit</button>
      <hr />
      {!!item && (<div key={item.id}>
          <h3>{item.id} - {item.title} - {item.name}</h3>
          <p>{item.body}</p>
        </div>)}
      <hr />
      <div>
        { list.map(value => <h3 key={value.id}>{value.id} - {value.title} - {value.name}</h3>) }
      </div>
    </div>
  );
} */

// uncontrol
/*function App() {
  const endpoint = useRef();
  const id = useRef();

  const [list, setList] = useState([]);
  const [item, setItem] = useState(null);

  const fetchList = async () => {
    const resp = await fetch(`${URL}/${endpoint.current.value}/${id.current.value}`);
    const json = await resp.json();

    !!id.current.value ? setItem(json) : setList(json);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!listEndpoints.includes(endpoint.current.value)) {
      endpoint.current.value = '';
      return alert('Error!');
    }
    if((!Number(id.current.value) || Number(id.current.value) < 1 || Number(id.current.value) > 100)
      && id.current.value !== '') {
      id.current.value = '';
      return alert('Error!');
    }
    fetchList();
  }

  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <input ref={endpoint} type={'text'} name={'endpoint'} placeholder={'endpoint'} />
        <input ref={id} type={'text'} name={'id'} placeholder={'id'} />
        <button type={'submit'}>submit</button>
      </form>
      <hr />
      {!!item && ( <div key={item.id}>
          <h3>{item.id} - {item.title} - {item.name}</h3>
          <p>{item.body}</p>
        </div> )}
      <hr />
      <div>
        { list.map(value => <h3 key={value.id}>{value.id} - {value.title} - {value.name}</h3>) }
      </div>
    </div>
  );
} */

// control
/*class App extends Component {
  state = {
    endpoint: '',
    id: '',
    list: [],
    item: null,
  }

  fetchList = async () => {
    const resp = await fetch(`${URL}/${this.state.endpoint}/${this.state.id}`);
    const json = await resp.json();

    !!this.state.id ? this.setState({...this.state, item: json})
      : this.setState({...this.state, list: json})
  }

  updateUserChoice = (e) => {
    const {target: {name, value}} = e;
    this.setState({...this.state, [name]: value});
  }

  onSubmit = () => {
    if (!listEndpoints.includes(this.state.endpoint)) {
      this.setState({...this.state, endpoint: ''});
      return alert('Error!');
    }
    if ((!Number(this.state.id) || Number(this.state.id) < 1 || Number(this.state.id) > 100)
      && this.state.id !== '') {
      this.setState({...this.state, id: ''});
      return alert('Error!');
    }
    this.fetchList();
  }

  render() {
    return (
      <div className='App'>
        <input value={this.state.endpoint} onChange={this.updateUserChoice}
               type={'text'} name={'endpoint'} placeholder={'endpoint'} />
        <input value={this.state.id} onChange={this.updateUserChoice}
               type={'text'} name={'id'} placeholder={'id'} />
        <button onClick={this.onSubmit}>submit</button>
        <hr />
        {!!this.state.item && ( <div key={this.state.item.id}>
          <h3>{this.state.item.id} - {this.state.item.title} - {this.state.item.name}</h3>
          <p>{this.state.item.body}</p>
        </div> )}
        <hr />
        <div>
          { this.state.list.map(value => <h3 key={value.id}>{value.id} - {value.title} - {value.name}</h3>) }
        </div>
      </div>
    );
  }
} */

// uncontrol
/*class App extends Component {
  endpoint = createRef();
  id = createRef();

  state = {
    list: [],
    item: null,
  }

  fetchList = async () => {
    const resp = await fetch(`${URL}/${this.endpoint.current.value}/${this.id.current.value}`);
    const json = await resp.json();

    !!this.id.current.value ? this.setState({...this.state, item: json})
      : this.setState({...this.state, list: json});
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!listEndpoints.includes(this.endpoint.current.value)) {
      this.endpoint.current.value = '';
      return alert('Error in endpoit!');
    }
    if ((!Number(this.id.current.value) || Number(this.id.current.value) < 1 || Number(this.id.current.value) > 100)
      && this.id.current.value !== '') {
      this.id.current.value = '';
      return alert('Error in id!');
    }
    this.fetchList();
  }

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.onSubmit}>
          <input ref={this.endpoint} type={'text'} name={'endpoint'} placeholder={'endpoint'} />
          <input ref={this.id} type={'text'} name={'id'} placeholder={'id'} />
          <button type={'submit'}>submit</button>
        </form>
        <hr />
        {!!this.state.item && ( <div key={this.state.item.id}>
          <h3>{this.state.item.id} - {this.state.item.title} - {this.state.item.name}</h3>
          <p>{this.state.item.body}</p>
        </div> )}
        <hr />
        <div>
          { this.state.list.map(value => <h3 key={value.id}>{value.id} - {value.title} - {value.name}</h3>) }
        </div>
      </div>
    );
  }
} */

// control
/*function App() {
  const [state, setState] = useState({
    select: 'Select 1',
    checkbox: [],
    radio: '',
  });

  const updateUserChoice = (e) => {
    const {target: {name, value}} = e;
    if (name === 'checkbox'){
      return setState({...state, checkbox: [...state.checkbox, value]});
    }
    setState({...state, [name]: value});
  }

  const onSubmit = () => {
    alert(JSON.stringify({state}, null, 2));
  }

  return (
    <div className={'App'}>
      <select onChange={updateUserChoice} name={'select'}>
        <option>Select 1</option>
        <option>Select 2</option>
      </select>
      <br />
      <input value={'checkbox1'} onChange={updateUserChoice} type={'checkbox'} name={'checkbox'} />
      <label>Checkbox1</label>
      <input value={'checkbox2'} onChange={updateUserChoice} type={'checkbox'} name={'checkbox'} />
      <label>Checkbox2</label>
      <br />
      <input value={'radio1'} onChange={updateUserChoice} type={'radio'} name={'radio'} />
      <label>Radio1</label>
      <input value={'radio2'} onChange={updateUserChoice} type={'radio'} name={'radio'} />
      <label>Radio2</label>
      <br />
      <button onClick={onSubmit}>submit</button>
    </div>
  );
} */

class App extends Component {
  state = {
    select: 'Select1',
    checkbox: [],
    radio: '',
  }

  updateUserChoice = (e) => {
    const {target: {name, value}} = e;

    if (name === 'checkbox') {
      return this.setState({...this.state, checkbox: [...this.state.checkbox, value]});
    }
    this.setState({...this.state, [name]: value});
  }

  onSubmit = () => {
    alert(JSON.stringify(this.state, null, 2));
  }

  render() {
    return (
      <div className={'App'}>
        <select onChange={this.updateUserChoice} name={'select'}>
          <option>Select 1</option>
          <option>Select 2</option>
        </select>
        <br />
        <input value={'checkbox1'} onChange={this.updateUserChoice} type={'checkbox'} name={'checkbox'} />
        <label>Checkbox1</label>
        <input value={'checkbox2'} onChange={this.updateUserChoice} type={'checkbox'} name={'checkbox'} />
        <label>Checkbox2</label>
        <br />
        <input value={'radio1'} onChange={this.updateUserChoice} type={'radio'} name={'radio'} />
        <label>Radio1</label>
        <input value={'radio2'} onChange={this.updateUserChoice} type={'radio'} name={'radio'} />
        <label>Radio2</label>
        <br />
        <button onClick={this.onSubmit}>submit</button>
      </div>
    );
  }
}

export default App;
