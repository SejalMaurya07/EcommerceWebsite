import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import WomenSection from './WomenSection';
function Header1() {
  return (
    <>
      <header class="head">
        <div className="container">
          <h2>TrendThread</h2>
          <nav className="navbox">
            <ul>
              <li className="navlist"><a href="/">Home</a></li>
              <li className="navlist"><a href="#">Products</a></li>
              <li className="navlist"><a href="#">Category</a></li>
              <li className="navlist"><a href="#">Shop</a></li>
              <li className="navlist"><a href="#">Contact</a></li>
              <li className="navlist"><FontAwesomeIcon icon={faShoppingCart} /></li>
              <li className="navlist"><FontAwesomeIcon icon={faHeart} /></li>
              <li className="navlist"><a href="register"><FontAwesomeIcon icon={faUser} /></a></li>
              <li className="navlist"><FontAwesomeIcon icon={faSearch} /></li>
            </ul>
          </nav>
        </div>
      </header>
      <header className="header2">
        <div className="container2">
          <h2>TrendThread</h2>
          <nav className="navbox">
            <ul>
              <li className="navlist"><a href="/men">Men</a></li>
              <li className="navlist"><a href="/women">Women</a></li>
              <li className="navlist"><a href="/kid">Kids</a></li>
              <li className="navlist"><a href="#">Latest</a></li>
              <li className="navlist"><a href="#">Sale</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header1;