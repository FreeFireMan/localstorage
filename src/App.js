import logo from './logo.svg';
import './App.css';
import {ProductCard} from "./components/Card/Card";

function App() {
  return (
    <div className="App">
        <ProductCard title={'title1'} price={'$19.99'} descr={'descr1'} />
        <hr />
        <ProductCard title={'title2'} price={''} descr={'descr2'} />
        <hr />
        <ProductCard title={'title3'} price={'$39.99'} />
        <hr />
        <ProductCard title={'title4'} price={'$49.99'} descr={'descr4'} />
        <hr />
    </div>
  );
}

export default App;
