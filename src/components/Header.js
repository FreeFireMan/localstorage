import {useSelector} from "react-redux";
import React from "react";

const Header = () => {
  const {totalWish, totalPriceWish} = useSelector(store => store.wish);
  const {totalCard, totalPriceCard} = useSelector(store => store.card);

  return (
    <header>
      <h1>Products List</h1>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
          <span>wish: {totalWish}</span>
          <span>card: {totalCard}</span>
        </div>

        <br />

        <div>
          <span>price in wish: {totalPriceWish}</span>
          <span>price in card: {totalPriceCard}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;