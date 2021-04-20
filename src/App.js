import React, {useState} from "react";
import './App.css';

/*
1 відмалювати список карточок базуючись на якомусь створеному вами масиві створити окрему кнопку,
яка буде видаляти поточний перший елемент (або останній)  якщо у нас масив з 3 елементів і ми клікнули на
кнопку 3 рази, то на екрані жодна карточка не має відмалюватись  (кнопки повернення до початкового стану не треба)

2 те саме, тільки з кнопкою реверт (повернутись до стану, де у нас видно 3 елемнети, як на початку)

3 задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку, ми видаляємо
зі списку саме її + реверт кнопка, щоб вернути все назад (ця кнопка одна дня всіх карточок, клікнули по
ній і всі каркти вернулись назазд) (згадування функції фільтр в лекції було не просто так)
*/

function App() {
  const [cards, setCards] = useState([
    {id: 1, title: 'First', content: 'First content'},
    {id: 2, title: 'Second', content: 'Second content'},
    {id: 3, title: 'Third', content: 'Third content'},
  ]);

  const [arrId, setArrId] = useState([]);
  const filteredArr = cards.filter(el => !arrId.includes(el.id));

  /*const deleteFirst = () => {
    let newArr = [...filteredArr];
    let item = newArr[0];
    setArrId([...arrId, item.id]);
  }

  const deleteLast = () => {
    let newArr = [...filteredArr];
    let item = newArr[newArr.length - 1];
    setArrId([...arrId, item.id]);
  } */

  const deleteItem = (id) => {
    let item = id;
    setArrId([...arrId, item]);
  }

  const revert = () => {
    setArrId([]);
  }

  return (
    <div className="App">
      {filteredArr.map(card => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
          <button onClick={() => deleteItem(card.id)}>delete item</button>
          <hr />
        </div>
      ))}

      {/*<button onClick={deleteFirst}>delete first</button>
      <button onClick={deleteLast}>delete last</button>*/}
      <button onClick={revert}>revert</button>
    </div>
  );
}

export default App;
