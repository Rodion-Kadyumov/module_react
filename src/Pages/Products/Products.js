import Card from '../../components/Cards/Card';
import HeaderMenu from '../../components/blocks/Header';
import { menu } from '../../mocData/menu';
import { useSelector } from 'react-redux';
import React from 'react';
import './style.css';

function Products () {
  const { finalPrice, SumCount } = useSelector(state => state.basket)
  
  return (
    <main className="main">
      <div className="container">
       <div>
        <HeaderMenu finalPrice={finalPrice} SumCount={SumCount} />
       </div>
        <div className="menu">
          {menu.map((totality) => {
            const { id, url, title, description, fullDescription, price, weight } = totality

            return (
              <Card
              key={id}
              id={id}
              url={url}
              title={title}
              description={description}
              fullDescription={fullDescription}
              price={price}
              weight={weight}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Products;