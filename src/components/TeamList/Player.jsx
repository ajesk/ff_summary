import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, Avatar, withStyles } from '@material-ui/core';
import {red, green, blue, orange, purple, pink} from '@material-ui/core/colors';


import './Player.css'

const positions = {
  1: 'QB',
  2: 'RB',
  3: 'WR',
  4: 'TE',
  5: 'K',
  16: 'DST'
}

const commonStyles = {
  'margin-right': 10,
  color: '#fff',
}

const styles = {
  'QB': {
    ...commonStyles,
    backgroundColor: red[500],
  },
  'RB': {
    ...commonStyles,
    backgroundColor: green[500],
  },
  'WR': {
    ...commonStyles,
    backgroundColor: blue[500],
  },
  'TE': {
    ...commonStyles,
    backgroundColor: orange[500],
  },
  'K': {
    ...commonStyles,
    backgroundColor: purple[500],
  },
  'DST': {
    ...commonStyles,
    backgroundColor: pink[500],
  },
  'player-entry': {
    'border-style': 'solid',
    'border-width': .25,
    margin: 0 
  }
}

class Player extends React.Component {
  
  positionIcon(defaultPositionId) {
    const _class = this.props.classes[positions[defaultPositionId]]
    return (
      <Avatar className={_class}>
        {positions[defaultPositionId]}
      </Avatar>
    )
  }

  render() {
    const {firstName, lastName, defaultPositionId, classes} = this.props;
    return (
      <ListItem className={classes["player-entry"]}>
        {this.positionIcon(defaultPositionId)} 
        <p className="player-name">
          {firstName} {lastName} 
        </p>
      </ListItem>
    );
  }
}

Player.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  defaultPositionId: PropTypes.number.isRequired,
};

export default withStyles(styles)(Player);
