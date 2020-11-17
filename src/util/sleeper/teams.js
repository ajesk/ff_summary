import axios from "axios";
import data from './teamsDummy.json'

const url = 'https://api.sleeper.app/v1/league/601155584863027200/users;'

const teamInfo = async (leagueId) => {
  const config = {
    params: {
      leagueId
    }
  }

  return mock();
  // return axios.get(url, config).then();
}

const mock = async () => {
  return data.map((entry) => {
    const { user_id, display_name, metadata } = entry;
    const { team_name } = metadata;
    return {
      id: user_id,
      name: display_name || team_name
    };
  });;
}


export default teamInfo;