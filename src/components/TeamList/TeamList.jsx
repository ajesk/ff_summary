import React from 'react';
import PropTypes from 'prop-types';

import {List} from '@material-ui/core';

import {Player} from '.';
import './TeamList.css';

class TeamList extends React.Component {

  player(playerInfo) {
    return <Player key={playerInfo.playerId} {...playerInfo} />
  }

  render() {
    const { team } = this.props;

    return (
      <List className="team-list">
        {team.slots.map((slot) => {
          return this.player(slot.player)
        })}
      </List>
    );
  }
}

export default TeamList;