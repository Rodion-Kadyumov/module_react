import { Link } from 'react-router-dom';
import './Header.css';

function HeaderMenu({SumCount, finalPrice}) {
  return(
      <header className="header">
        <h1 className="header__title">Наша продукция</h1>
        <p className="header__block">{SumCount} товаров<br/> на сумму: {finalPrice} р.</p>
        <Link to={'/basket'} className="header__btn">
          <svg width="50" height="20" xmlns="http://www.w3.org/2000/svg"></svg>
        </Link>
     </header>
  )
}

export default HeaderMenu