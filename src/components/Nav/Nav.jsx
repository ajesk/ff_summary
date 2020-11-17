import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

import './Nav.css';
import { NavProfileIcon, NavProfileMenu } from '.';

const debug = false;

class Nav extends Component {
  state = {
    auth: true,
    anchor: null
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchor: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchor: null });
  };

  debugToggle(auth) {
    return (
      debug && 
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
    )
  }

  navProfileIcon(open) {
    return <NavProfileIcon open={open} handleMenu={this.handleMenu.bind(this)} />
  }

  navProfileMenu(open, anchor) {
    return <NavProfileMenu open={open} handleClose={this.handleClose.bind(this)} anchor={anchor} />
  }

  render() {
    const { auth, anchor } = this.state;
    const { openSideBar } = this.props;
    const open = Boolean(anchor);

    return (
      <div className="nav">
        {this.debugToggle(auth)}
        <AppBar position="static" color={'primary'}>
          <Toolbar>
            <IconButton className="nav-icon" color="inherit" aria-label="Menu" onClick={openSideBar}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className="nav-title">
              OneFFPlatform
            </Typography>
            {auth && (
              <div className="name-menu">
                {this.navProfileIcon(open)}
                {this.navProfileMenu(open, anchor)}
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }


}

export default Nav;
