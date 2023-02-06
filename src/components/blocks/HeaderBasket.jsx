import './Header.css';
import { Link } from 'react-router-dom';
import React from 'react';

function HeaderBasket() {

  return(
    <header className="header">
      <Link to={'/'} className="basket__btn">
        <svg width="50" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
      </Link>
      <h1 className="basket__title">Корзина с выбранными товарами</h1>
    </header>
  )
}

export default HeaderBasket