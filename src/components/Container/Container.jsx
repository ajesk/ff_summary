import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';
import Team from '../../pages/Team'
import League from '../../pages/League';
import Matchup from '../../pages/Matchup';
import league from '../../util/sleeper/rosters'
import teamInfo from '../../util/sleeper/teams'

class Container extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedPage: 0,
      leagueData: [],
      teams: [],
    };
  }



  componentDidMount() {
    league().then(leagueData => this.setState({ leagueData }));
    teamInfo().then(teams => this.setState({ teams }));
  }

  selectPage(selectPage) {
    this.setState({ selectPage });
  }

  teamPage(leagueInfo) {
    return <Team leagueInfo={leagueInfo} />
  }

  matchupPage(leagueInfo) {
    return <Matchup leagueInfo={leagueInfo} />
  }

  leaguePage() {
    const {leagueData, teams} = this.state;
    return <League leagueData={leagueData} teams={teams} />
  }

  playersPage(leagueInfo) {
    return '';
  }

  getPage(page = 0) {
    const { leagueInfo } = this.props;

    switch (page) {
      case 0:
        return this.teamPage(leagueInfo);
      case 1:
        return this.matchupPage(leagueInfo);
      case 2:
        return this.leaguePage(leagueInfo);
      case 3:
        return this.playersPage(leagueInfo);
      default:
        return '';
    }
  }

  render() {
    const { selectPage } = this.state;

    return (
      <div className="page-container">
        <Tabs onSelect={this.selectPage.bind(this)} />
        {this.getPage(selectPage)}
      </div>
    );
  }
}

Container.propTypes = {
  leagueInfo: PropTypes.object.isRequired,
};

export default (Container);
