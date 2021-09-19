import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import League from '../../pages/League';
import league from '../../util/sleeper/rosters'
import teamInfo from '../../util/sleeper/teams'
import { Button, TextField } from '@material-ui/core';

// 728381307620528128
const Container = () => {
  const leagueId = useRef('');
  const [teams, setTeams] = useState([]);
  const [leagueData, setLeagueData] = useState([])

  const leagueRequest = () => {
    const id = leagueId.current.value;
    if (id === '') return;
    Promise.all([league(id), teamInfo(id)])
      .then(values => {
        setLeagueData(values[0]);
        setTeams(values[1]);
      }).catch(err => console.error(err))
  };

  return (
    <div className="page-container">
      <TextField id="league-id" variant="outlined" inputRef={leagueId} />
      <Button onClick={() => leagueRequest()}>Submit</Button>
      {
        teams.length !== 0 && leagueData.length !== 0 && (
          <League leagueData={leagueData} teams={teams} />
        )
      }
    </div>
  );
}

Container.propTypes = {
  leagueInfo: PropTypes.object.isRequired,
};

export default (Container);
