import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Detail from "../../components/blocks/Detail";
import './style.css';

function ProductDetail() {
  const navigation = useNavigate();
  const back = () => navigation(-1);
  const { finalPrice, SumCount} = useSelector(state => state.basket)
  const detailProduct = useSelector(state => state.card.card)

  return(
    <div className="product">
      < header className="product-header">
        <Link to={''} className="product-back">
           <svg onClick={back} width="50" height="20" xmlns="http://www.w3.org/2000/svg"></svg>
        </Link>
        <p className="product-items">{SumCount} товара <br/> на сумму {finalPrice} p.</p>
        <Link to={'/basket'} className="header__btn">
          <svg width="50" height="20" xmlns="http://www.w3.org/2000/svg"></svg>
        </Link>
        <Link to={'/Entry'}>
         <button className="product-fine">Выйти</button>
        </Link>
      </header>
      <div className="detail">
        <Detail
          id={detailProduct.id}
          url={detailProduct.url}
          title={detailProduct.title}
          fullDescription={detailProduct.fullDescription}
          price={detailProduct.price}
          weight={detailProduct.weight}
        />
      </div>
    </div>
  );
}

export default ProductDetail;