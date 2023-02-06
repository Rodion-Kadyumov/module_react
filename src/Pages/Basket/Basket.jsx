import ChoiceProduct from './ChoiceProduct';
import HeaderBasket from '../../components/blocks/HeaderBasket';
import FooterBasket from '../../components/blocks/FooterBasket';
import { useSelector } from 'react-redux';
import '../Basket/style.css';

function Basket() {
  const basket = useSelector((state) => state.basket.basket);
  
  return (

    <main className="main">
      <div className="container">
        <div>
          <HeaderBasket />
        </div>
        <div className="all-basket">
          {basket.lenght !== 0 ? basket.map(item => {
            const { id, url, title, description, fullDescription, price, weight } = item;

            return (
              <ChoiceProduct
              id={id}
              url={url}
              title={title}
              description={description}
              fullDescription={fullDescription}
              price={price}
              weight={weight}
              />
            )
          }) : <p className="empty-basket">Корзина пуста</p>}
        </div>
        <div className="footer">
          <FooterBasket />
        </div>
      </div>
    </main>
  );
}

export default Basket;