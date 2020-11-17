import React from 'react';

import { withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import round from '../../util/round';
import styles from './League.styles'

const LeagueTable = ({ rank = 0, totalWeeks = 0, row = {}, team = {}, avgWeekly = 0 }) => {
  const avgPF = round(row.pf / totalWeeks);
  const avgPA = round(row.pa / totalWeeks);
  const pfDiff = round((row.pf / totalWeeks) - avgWeekly);
  const paDiff = round((row.pa / totalWeeks) - avgWeekly);
  const good = (diff) => {
    if (diff > 5) return (diff > 10) ? "Very Good" : "Good";

    if (diff < -5) return (diff < -10) ? "Very Suck" : "Suck";

    return "Average";
  }
  const luck = (diff) => {
    if (diff > 5) return (diff > 10) ? "Very Bad Luck" : "Bad Luck";

    if (diff < -5) return (diff < -10) ? "Very Lucky" : "Lucky";

    return "Average";
  }

  return (
    <TableRow className={''} key={row.teamId}>
      <TableCell component="th" scope="row">{rank}</TableCell>
      <TableCell>{`${row.wins}-${row.losses}-${row.ties}`}</TableCell>
      <TableCell>{team.name}</TableCell>
      <TableCell>{row.pf}</TableCell>
      <TableCell>{avgPF}</TableCell>
      <TableCell>{pfDiff}</TableCell>
      <TableCell>{row.pa}</TableCell>
      <TableCell>{avgPA}</TableCell>
      <TableCell>{paDiff}</TableCell>
      <TableCell>{good(pfDiff)}</TableCell>
      <TableCell>{luck(paDiff)}</TableCell>
    </TableRow>
  )

}

export default withStyles(styles)(LeagueTable);