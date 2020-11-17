import React, { Component } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import './NavProfileMenu.css';

class NavProfileMenu extends Component {

  render() {
    const {handleClose, open, anchor} = this.props;

    return (
      <Menu
          id="menu-appbar"
          anchorEl={anchor}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
    );
  }
}

export default NavProfileMenu;
