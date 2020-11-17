import React, { Component } from 'react';

import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import './SideBar.css';

class SideBar extends Component {

  leagueList() {
    return (
      <div className="sidebar">
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );
  }

  render() {
    const {open, close} = this.props;

    return (
      <div>
        <SwipeableDrawer
          open={open}
          onClose={close}
          onOpen={close}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={close}
            onKeyDown={close}
          >
            {this.leagueList()}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SideBar.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func.isRequired
};

export default SideBar;
