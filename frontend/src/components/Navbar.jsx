import './navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            
            <div className="navbar__logo">
                <Link to="/">
                    <h2>Music Shop</h2>
                </Link>
            </div>
            
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i class="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                        </span> 
                        <span className="cartlogo__badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            
            <div className="hamburger__menu ">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;