import React from 'react';

import { styled, withStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styles from './League.styles'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: "white",
  },
  '&:nth-of-type(even)': {
    backgroundColor: "lightgrey",
  },
}));

const performanceRating = (diff) => {
  switch(diff) {
    case 0:
      return 'Average';
    case 1:
      return 'Good';
    case 2:
      return 'Very Good';
    case 3:
      return 'Unbelievably Good';
    case -1:
      return 'Suck';
    case -2:
      return 'Very Suck';
    case -3:
      return 'Ungodly Suck';
    default:
      return 'Off the charts!!';
  }
}

const luckRating = (diff) => {
  switch(diff) {
    case 0:
      return 'Average';
    case -1:
      return 'Lucky';
    case -2:
      return 'Very Lucky';
    case -3:
      return 'Unbelievably Lucky';
    case 1:
      return 'Unlucky';
    case 2:
      return 'Very Unlucky';
    case 3:
      return 'Ungodly Unlucky';
    default:
      return 'Off the charts!!';
  }
}

const flatten = (num) => {
  if (Math.sign(num) === 1) {
    return Math.floor(num);
  }
  return Math.ceil(num);
}

const LeagueTable = ({ rank = 0, row = {}, team = {}, stdDeviation = 0 }) => {
  
  const luck = luckRating(flatten(row.paDeviation / stdDeviation));
  const performance = performanceRating(flatten(row.pfDeviation / stdDeviation));

  

  return (
    <StyledTableRow className={''} key={row.teamId}>
      <TableCell component='th' scope='row'>{rank}</TableCell>
      <TableCell>{`${row.wins}-${row.losses}-${row.ties}`}</TableCell>
      <TableCell>{team.name}</TableCell>
      <TableCell>{row.pf}</TableCell>
      <TableCell>{row.avgPF}</TableCell>
      <TableCell>{row.pfDeviation}</TableCell>
      <TableCell>{row.pa}</TableCell>
      <TableCell>{row.avgPA}</TableCell>
      <TableCell>{row.paDeviation}</TableCell>
      <TableCell>{performance}</TableCell>
      <TableCell>{luck}</TableCell>
    </StyledTableRow>
  )

}

export default withStyles(styles)(LeagueTable);