import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import League from '../../pages/League';
import { teamData, teamInfo, leagueInfo } from '../../util/sleeper/sleeper';
import { Button, TextField } from '@material-ui/core';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';
import './Container.css';

const helpText = `
  Paste your Sleeper league's id in this text box. If you need to find it, navigate to your league in a browser and look for the long number ID in the URL.
`

// 728381307620528128
const Container = () => {
  const leagueId = useRef('');
  const [teams, setTeams] = useState([]);
  const [teamStats, setTeamStats] = useState([])
  const [leagueData, setLeagueData] = useState([])

  const leagueRequest = () => {
    const id = leagueId.current.value;
    if (id === '') return;
    Promise.all([teamData(id), teamInfo(id), leagueInfo(id)])
      .then(values => {
        setTeamStats(values[0]);
        setTeams(values[1]);
        setLeagueData(values[2])
      }).catch(err => console.error(err))
  };

  return (
    <div className="page-container">
      <div className="league-id-entry">
        <TextField id="league-id" variant="outlined" onKeyDown={(e) => {
          if (e.key === "Enter") { leagueRequest() }
        }} inputRef={leagueId} />
        <Tooltip title={helpText}>
            <HelpIcon />
        </Tooltip>
        <Button variant="outlined" color="primary" onClick={() => leagueRequest()}>Submit</Button>
      </div>
      {
        teams.length !== 0 && teamStats.length !== 0 && (
          <League teamStats={teamStats} teams={teams} {...leagueData} />
        )
      }
    </div>
  );
}

Container.propTypes = {
  leagueInfo: PropTypes.object
};

export default (Container);
