import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { detailProduct } from '../../store/reducers/fullCard';
import './card.css';

function Card({ id, url, title, description, fullDescription, price, weight }) {

  const dispatch = useDispatch()

  const handleClickCard = () => {
    let item = {
      id: id,
      url: url,
      title: title,
      description: description,
      fullDescription: fullDescription,
      price: price,
      weight: weight
    }
    dispatch(detailProduct(item))
  }

  const handleAddCard = (e) => {
    let item = {
      id: uuidv4(),
      title: title,
      url: url,
      price: price,
      fullDescription: fullDescription
    }
    dispatch(addProduct(item))
    e.preventDefault()
  }

  return (
      <div className="card">
        <Link to={`/basket/${id}`} onClick={handleClickCard}>
         <img className="card__preview" src={url} alt={title} />
        </Link>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <span className="card__price">{price}</span>
        <span className='card__weight'>{weight}</span>
        <button onClick={handleAddCard} className= "card__price-btn">
          +
        </button>
     </div>
  );
}

export default Card