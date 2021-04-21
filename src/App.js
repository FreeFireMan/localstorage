import React, {useEffect, useState} from "react";
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

function App() {
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
      {!!item && (
        <div key={item.id}>
          <h3>{item.id} - {item.title} - {item.name}</h3>
          <p>{item.body}</p>
        </div>
      )}
      <hr />
      <div>
        {
          list.map(value => <h3 key={value.id}>{value.id} - {value.title} - {value.name}</h3>)
        }
      </div>
    </div>
  );
}

export default App;
