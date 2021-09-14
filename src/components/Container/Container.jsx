import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import League from '../../pages/League';
import league from '../../util/sleeper/rosters'
import teamInfo from '../../util/sleeper/teams'

const Container = () => {

  const [teams, setTeams] = useState([]);
  const [leagueData, setLeagueData] = useState([])
  useEffect(() => {
    const leagueId = '728381307620528128';
    league(leagueId).then(results => setLeagueData(results));
    teamInfo(leagueId).then(results => setTeams(results));
  }, [])

  return (
    <div className="page-container">
      {
        teams.length && leagueData.length && (
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
