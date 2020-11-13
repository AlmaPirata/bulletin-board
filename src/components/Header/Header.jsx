import React from "react";
import {NavLink} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import './header.css';

const Header = () => {

  return (
    <Paper className='header'>
      <MenuList className="main-header">
        <MenuItem className="header-item">
          <NavLink className="header-item-link" color="inherit" to="/" onClick={handleClick}>
            Главная
          </NavLink>
        </MenuItem>
        <MenuItem className="header-item">
          <NavLink className="header-item-link" color="inherit" to="/add" onClick={handleClick}>
            Создать объявление
          </NavLink>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};

export default Header;