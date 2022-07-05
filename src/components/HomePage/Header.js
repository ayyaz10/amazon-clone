import React from "react";
import "../../assets/css/Header.css";
import SiteLogo from "../../assets/images/amazon_dark_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img class="header__logo" src={SiteLogo} />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__saerchIcon" />
        {/* logo */}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <div className="header_optionLineOne">Helo Guest</div>
          <div className="header_optionLineTwo">Sign</div>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header_optionLineOne">Helo Guest</span>
          <span className="header_optionLineTwo">Sign</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon className="" />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
