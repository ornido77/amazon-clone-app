import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="header__input" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__nav__items">
          <span className="headerNavItemLine1">Hello User</span>
          <Link
            to="/login"
            style={{
              textDecoration: "inherit",
              color: "inherit",
            }}
          >
            <span className="header__nav headerNavItemLine2">Sign In</span>
          </Link>
        </div>
        <div className="header__nav__items">
          <span className="headerNavItemLine1">Returns</span>
          <span className="headerNavItemLine2">& Orders</span>
        </div>
        <div className="header__nav__items">
          <span className="headerNavItemLine1">Your</span>
          <span className="headerNavItemLine2">Prime</span>
        </div>

        <div className="header__basket">
          <Link to="/checkout">
            <ShoppingBasketIcon className="header__basket" />
          </Link>
          <span className="headerNavItemLine2 header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
