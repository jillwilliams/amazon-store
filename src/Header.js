import React from 'react';
import './Header.css';
import Logo from './images/amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="amazon logo" className="header_logo" />
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header_optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns&nbsp;
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header_optionBasket">
                    <ShoppingCartIcon className="shopping_cart"/>
                    <span className="header_optionLineTwo header_basketCount">
                        0
                    </span>
                </div> 
            </div>
        </div>
    );
}

export default Header;
