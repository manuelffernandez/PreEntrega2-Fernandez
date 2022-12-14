import CartWidget from '../CartWidget/CartWidget';
import NavBrand from '../NavBrand/NavBrand';
import NavBarToggler from '../NavBarToggler/NavBarToggler';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className='bgBittersweet header'>
      <nav className='navbar navbar-expand-sm py-3'>
        <div className='container-fluid px-4 order-1'>
          <NavBrand />
          <CartWidget />
          <NavBarToggler />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
