import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img 
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="" />

            <div className="header__search">
                <input className="header__input" type="text" />
                <SearchIcon 
                    className="header__searchIcon"
                />
            </div>

            <div className="header__nav">
                <div className="header__nav__items">
                    <span className="headerNavItemLine1">
                        Hello User
                    </span>
                    <span className="headerNavItemLine2">
                        Sign In
                    </span>
                </div>
                <div className="header__nav__items">
                    <span className="headerNavItemLine1">
                        Returns
                    </span>
                    <span className="headerNavItemLine2">
                        & Orders
                    </span>
                </div>
                <div className="header__nav__items">
                    <span className="headerNavItemLine1">
                        Your
                    </span>
                    <span className="headerNavItemLine2">
                        Prime
                    </span>
                </div>

                <div className="header__basket">
                    <ShoppingBasketIcon/>
                    <span className="headerNavItemLine2 header__basketCount">
                        0
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
