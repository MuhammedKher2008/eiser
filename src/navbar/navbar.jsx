import { Link } from "react-router-dom";
import navbarcss from "./navbar.module.css";
import logo from "./logo (1).png";

const Navbar = () => {
  return (
    <nav className={navbarcss.navbar}>
      <img className={navbarcss.logo} src={logo} alt="" />
      <Link className={navbarcss.navItem} to="/">
        home
      </Link>
      <Link className={navbarcss.navItem} to="/shop">
        shop
      </Link>
      <Link className={navbarcss.navItem} to="/blog">
        blog
      </Link>
      <Link className={navbarcss.navItem} to="/pages">
        pages
      </Link>
      <Link className={navbarcss.navItem} to="/contact">
        contact
      </Link>

      <Link className={navbarcss.search}>
        <i class="fa-solid fa-magnifying-glass search"></i>
      </Link>
      <Link className={navbarcss.search}>
        <i class="fa-solid fa-basket-shopping"></i>{" "}
      </Link>
      <Link className={navbarcss.search}>
        <i class="fa-solid fa-user"></i>{" "}
      </Link>
      <Link className={navbarcss.search}>
        <i class="fa-solid fa-heart"></i>{" "}
      </Link>
    </nav>
  );
};

export default Navbar;
