import React from 'react';

import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import styles from './League.styles'
import TeamRow from './TeamRow';

const LeagueTable = ({ leagueData = [], teams = [], totalWeeks = 0, avgWeekly = 0 }) => {

  const findTeam = (id) => teams.find(x => x.id === id);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Rank</TableCell>
          <TableCell>Record</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>PF</TableCell>
          <TableCell>PF Avg</TableCell>
          <TableCell>PF Diff</TableCell>
          <TableCell>PA</TableCell>
          <TableCell>PA Avg</TableCell>
          <TableCell>PA Diff</TableCell>
          <TableCell>Performance</TableCell>
          <TableCell>Luck</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          leagueData.sort((b, a) => a.wins - b.wins || a.ties - b.ties || a.pf - b.pf)
            .map((row, i) =>
              (
                <TeamRow row={row} rank={i + 1} totalWeeks={totalWeeks} avgWeekly={avgWeekly} team={findTeam(row.ownerId)} />
              )
            )
        }
      </TableBody>
    </Table>
  );
}

export default withStyles(styles)(LeagueTable);