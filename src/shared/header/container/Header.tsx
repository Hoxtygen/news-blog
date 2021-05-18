import React, {useState} from "react";
import { Toolbar } from "../components/Toolbar";
import Topnav from "../components/TopNav";

const Header = (props:any) => {
    const [toolbar, setToolbar] = useState(false);

  const changeToolbar = () => {
    if (window.scrollY >= 84) {
      setToolbar(true);
    } else {
      setToolbar(false);
    }
  };
  return (
    <header className="toolbar">
      <div className="container">
        <div className="header-inner">
          <Topnav />
          <Toolbar
          drawerClickHandler={props.drawerClickHandler}
          toggleClasses={props.toggleClasses}
          toolbar = {toolbar}
          changeToolbar = {changeToolbar}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
