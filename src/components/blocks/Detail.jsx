import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/reducers/basket";
import { v4 as uuidv4 } from "uuid";
import './Detail.css';

function Detail({ url, title, price, fullDescription, weight }) {
  const card = useSelector(state => state.card.card);
  const dispatch = useDispatch()
  const handleAddCard = () => {
    let item = {
      id: uuidv4(),
      title: title,
      url: url,
      price: price,
      fullDescription: fullDescription,
      weight: weight
    }
    dispatch(addProduct(item))
  }
  return (  
    <div className="detail">
      <div className="detail-img">
       <img className="detail-image" src={card.url} alt={title} />
      </div>
      <div className="detail-information">
        <h2 className="detail-title">{card.title}</h2>
        <p className="detail-description">{card.fullDescription}</p>
        <div className="detail-menu">
          <div className="detail-info">{card.price} р./ {card.weight}</div>
        </div>
        <button onClick={handleAddCard} className="detail-btn">В корзину</button>
      </div>
    </div>
  )
}

export default Detail