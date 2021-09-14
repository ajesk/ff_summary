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
  const modifiedData = leagueData.map(x => {
    x.paDeviation = round(x.pa / totalWeeks - avgWeekly);
    x.pfDeviation = round(x.pf / totalWeeks - avgWeekly);
    x.avgPF = round(x.pf / totalWeeks)
    x.avgPA = round(x.pa / totalWeeks)

    return x;
  })
  const stdDeviation = round(modifiedData.map(x => Math.abs(x.pfDeviation))
    .reduce((a, b) => a + b, 0) / leagueData.length);

  console.log(modifiedData)
  console.log(stdDeviation)

  return (
    <div className="league-page">
      <h1>League</h1>
      <LeagueStats avgPoints={avgPoints} avgWeekly={avgWeekly} stdDeviation={stdDeviation} />
      <LeagueTable
        leagueData={leagueData}
        totalWeeks={totalWeeks}
        avgWeekly={avgWeekly}
        teams={teams}
        stdDeviation={stdDeviation}
      />
    </div>
  );
}

League.propTypes = {

};

export default withStyles(styles)(League);