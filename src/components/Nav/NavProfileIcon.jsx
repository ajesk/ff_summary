import React, { Component } from 'react';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import './NavProfileIcon.css';

class NavProfileIcon extends Component {

  render() {
    const {handleMenu, open} = this.props;

    return (
      <IconButton
        aria-owns={open ? 'menu-appbar' : undefined}
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    );
  }
}

export default NavProfileIcon;
