import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './Nav.css';

const Nav = () =>
      <div className="nav">
        <AppBar position="static" color={'primary'}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className="nav-title">
              Bad Luck or Just Suck
            </Typography>
          </Toolbar>
        </AppBar>
      </div>;

export default Nav;
