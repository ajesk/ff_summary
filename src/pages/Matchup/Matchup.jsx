import React from 'react';

import { withStyles } from '@material-ui/core';

import {matchup, team} from '../../util/espn'

import styles from './Matchup.styles'
import './Matchup.css';

class Matchup extends React.Component {

  state = {
    selectedMatchup: 0,
    matchups: {},
    week: 0,
    selectedTeams: [

    ]
  };
  
  componentDidMount() {
    const {leagueId, seasonId} = this.props.leagueInfo;
    matchup.getMatchup(leagueId, seasonId)
      .then((res) => {
        const {scoreboard} = res.data;
        const week = scoreboard.matchupPeriodId;
        const {matchups} = scoreboard;
        this.setState({week, matchups}, () => {

        });
      });
  }

  loadTeams(selected = this.state.selectedMatchup) {

    const {leagueId, seasonId} = this.props.leagueInfo;

    team.teams(leagueId, seasonId, 6)
      .then((res) => {
        this.setState({team: res.data.leagueRosters.teams[0]});
      })
  }

  week() {
    return (
      <h1>{`Week ${this.state.week}`}</h1>
    )
  }

  teamList(team) {
    const {teamLocation, teamNickname} = team.team;
    return (
      <div>
        <div>
          {`${teamLocation} ${teamNickname}`}
        </div>
      </div>
    )
  }

  matchup() {
    const matchup = this.state.matchups[this.state.selectedMatchup];

    if (!matchup) return '';

    return (
      <div className="matchup">
        <div className="team-a">
          {this.teamList(matchup.teams[0])}
        </div>
        <div className="team-b">
          {this.teamList(matchup.teams[1])}
        </div>
      </div>
    );
  }

  render() {
    console.log(this.state)
    return (
      <div className="matchup-page">
        {this.week()}
        {this.matchup()}
      </div>
    );
  }
}

Matchup.propTypes = {
  
};

export default withStyles(styles)(Matchup);
