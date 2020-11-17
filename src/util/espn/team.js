import axios from 'axios';
import urls from './base';

const team = {
  matchup(leagueId, teamId, seasonId) {
    const config = {
      params: {
        leagueId, teamId, seasonId,
        matchupPeriodId: 2
      }
    };

    axios.get(urls.scoreboard, config)
      .then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
  },

  teams(leagueId, seasonId, teamId) {
    const params = {leagueId, seasonId, teamIds: teamId};
    const config = {params};

    return axios.get(urls.rosterInfo, config)
    //return axios.get(urls.teams, config);
  }
}

export default team;