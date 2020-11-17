import axios from "axios";
import urls from './base';

const matchup = {
  getMatchup(leagueId, seasonId) {
    const params = {leagueId, seasonId};
    const config = {params};

    return axios.get(urls.scoreboard, config); 
  }
}

export default matchup;