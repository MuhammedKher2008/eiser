import { Link, useNavigate } from "react-router-dom";
import navbarcss from "./navbar.module.css";
import logo from "./logo (1).png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };

  return (
    <nav className={navbarcss.navbar}>
      <img className={navbarcss.logo} src={logo} alt="Logo" />
      <Link className={navbarcss.navItem} to="/">
        home
      </Link>

      <select className={navbarcss.navItem} onChange={handleSelectChange}>
        <option value="">Shop Category</option>
        <option value="/shopCategory">Shop Category</option>
        <option value="/productDetails">product details</option>
        <option value="/productChekout">product Chekout</option>
        <option value="/Cart">cart</option>
      </select>

       <select className={navbarcss.navItem} onChange={handleSelectChange}>
        <option value="">blog</option>
        <option value="/blog">blog</option>
        <option value="/blogdetails">blog details</option>
      </select>
      <Link className={navbarcss.navItem} to="/pages">
        pages
      </Link>
      <Link className={navbarcss.navItem} to="/contact">
        contact
      </Link>

      <Link className={navbarcss.search}>
        <i className="fa-solid fa-magnifying-glass search"></i>
      </Link>
      <Link className={navbarcss.search}>
        <i className="fa-solid fa-basket-shopping"></i>
      </Link>
      <Link className={navbarcss.search}>
        <i className="fa-solid fa-user"></i>
      </Link>
      <Link className={navbarcss.search}>
        <i className="fa-solid fa-heart"></i>
      </Link>
    </nav>
  );
};

export default Navbar;
