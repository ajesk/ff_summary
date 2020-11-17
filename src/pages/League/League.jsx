import React from 'react';
import { withStyles } from '@material-ui/core';
import LeagueTable from './LeagueTable';
import styles from './League.styles'
import LeagueStats from './LeagueStats';
import round from '../../util/round';

const League = ({ leagueData = [], teams = [] }) => {
  const leagueAvg = () => leagueData.map(x => x.pf).reduce((a, b) => a + b, 0) / leagueData.length;
  const avgPoints = round(leagueAvg());
  const totalWeeks = (leagueData[0].wins + leagueData[0].losses + leagueData[0].ties)
  const avgWeekly = round(avgPoints / totalWeeks);

  return (
    <div className="league-page">
      <h1>League</h1>
      <LeagueStats avgPoints={avgPoints} avgWeekly={avgWeekly} />
      <LeagueTable
        leagueData={leagueData}
        totalWeeks={totalWeeks}
        avgWeekly={avgWeekly}
        teams={teams}
      />
    </div>
  );
}

League.propTypes = {

};

export default withStyles(styles)(League);