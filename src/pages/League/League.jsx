import React from 'react';
import { withStyles } from '@material-ui/core';
import LeagueTable from './LeagueTable';
import styles from './League.styles'
import LeagueStats from './LeagueStats';
import round from '../../util/round';

const League = ({ teamStats = [], teams = [], name = "", season = "" }) => {
  const leagueAvg = () => teamStats.map(x => x.pf).reduce((a, b) => a + b, 0) / teamStats.length;
  const avgPoints = round(leagueAvg());
  const totalWeeks = (teamStats[0].wins + teamStats[0].losses + teamStats[0].ties)
  const avgWeekly = round(avgPoints / totalWeeks);
  const modifiedData = teamStats.map(x => {
    x.paDeviation = round(x.pa / totalWeeks - avgWeekly);
    x.pfDeviation = round(x.pf / totalWeeks - avgWeekly);
    x.avgPF = round(x.pf / totalWeeks)
    x.avgPA = round(x.pa / totalWeeks)

    return x;
  })
  const stdDeviation = round(modifiedData.map(x => Math.abs(x.pfDeviation))
    .reduce((a, b) => a + b, 0) / teamStats.length);

  return (
    <div className="league-page">
      <h1>{`${name} ${season}`}</h1>
      <LeagueStats avgPoints={avgPoints} avgWeekly={avgWeekly} stdDeviation={stdDeviation} />
      <LeagueTable
        leagueData={teamStats}
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