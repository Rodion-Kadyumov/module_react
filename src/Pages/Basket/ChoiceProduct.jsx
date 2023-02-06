import '../../components/Cards/card.css';
import { useDispatch} from 'react-redux';
import { deleteProduct } from '../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid';

function Choice ({ url, title, price, id }) {

  const dispatch = useDispatch()

  // let item = {
  //   id: uuidv4(),
  //   title: title,
  //   url: url,
  //   price: price
  // }

  const handleDeleteCard = () => {
    let item = { id: id }
    dispatch(deleteProduct(item))
  }

  return (
    <div className="choice">
      <img className="choice-image" src={url} alt={title}/>
      <h2 className="choice-title">{title}</h2>
      <div className="choice-blok">
        <div className="choice-blok__price">{price}</div>
        <button onClick={handleDeleteCard} className="choice-blok__btn">Х</button>
      </div>
    </div>
  )
}

export default Choice