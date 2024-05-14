import './App.css';
import PizzaCard from "./components/PizzaCard"
import img1 from './images/pizza.png';
import React, { useState } from 'react';



function App() {
  return(
    <main class="main">
      <div className="container">
      <div className="main_block">
            <div className="blocks"><PizzaCard img={img1}  title = "Пепперони" text="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла"/></div>
            </div>
        

        
        <form>
  
          <select className="quantity" id="diam-select">
            <option value="">Диаметр</option>
            <option value="35">35 см</option>
            <option value="45">45 см</option>
            <option value="55">55 см</option>
  
          </select>
        </form>

        <h2 className="main_title">550₽</h2>
          

      </div>
    </main>
  );
}

//export default App;

function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div>
    <button onClick={() => (setCount(count - 1))}>-</button>

    <span>{count}</span>
    <button onClick={() => (setCount(count + 1))}>+</button>

    <button onClick={() => (alert('Количество заказанного товара: ${count}'))}>Корзина</button>
  </div>
  );
}

export default App; Counter

