import React from 'react';

import { withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import styles from './League.styles'

const LeagueTable = ({ avgPoints = 0, avgWeekly = 0, stdDeviation = 0 }) => {

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Average Points</TableCell>
          <TableCell>Average Weekly Points</TableCell>
          <TableCell>Standard Deviation</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{avgPoints}</TableCell>
          <TableCell>{avgWeekly}</TableCell>
          <TableCell>{stdDeviation}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default withStyles(styles)(LeagueTable);