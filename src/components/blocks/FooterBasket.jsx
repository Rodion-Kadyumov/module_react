import './Footer.css';
import React from 'react';
import { useSelector } from 'react-redux';

function FooterBasket() {

  const { finalPrice } = useSelector(state => state.basket)

  return(
    <footer className="footer">
      <div className="footer__price">
        Заказ на сумму: {finalPrice}
      </div>
      <button className="footer__btn">
        Оформить заказ
      </button>
    </footer>
  )
}

export default FooterBasket