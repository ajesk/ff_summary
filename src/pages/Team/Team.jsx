import React from 'react';
import PropTypes from 'prop-types';

import {team} from '../../util/espn';
import TeamList from '../../components/TeamList';
import './Team.css';

class Team extends React.Component {
  state = {
    team: {
      slots: [],
      team: {}
    },
  };

  componentDidMount() {
    this.getTeamInfo();
  }

  getTeamInfo() {
    const {leagueId, seasonId, teamId} = this.props.leagueInfo;

    team.teams(leagueId, seasonId, teamId)
      .then((res) => {
        this.setState({team: res.data.leagueRosters.teams[0]});
      })
    
  }

  render() {
    const {team} = this.state;

    console.log(team)
    return (
      <div className="team-page">
        <h1>{`${team.team.teamLocation} ${team.team.teamNickname}`}</h1>
        <TeamList team={team} />
      </div>
    );
  }
}

Team.propTypes = {
  leagueInfo: PropTypes.object.isRequired,
};

export default (Team);
