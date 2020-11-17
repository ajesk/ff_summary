import axios from "axios";
import urls from './base';

const league = {
  recentActivity(leagueId) {
    const config = {
      params: {
        leagueId
      }
    }
    return axios.get()
  },
  leagueTeams(leagueId, seasonId) {
    const config = {
      params: {
        leagueId, seasonId
      }
    }

    return axios.get(urls.teams, config);
  }
}

export default league;