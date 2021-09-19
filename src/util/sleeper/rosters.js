// https://api.sleeper.app/v1/league/601155584863027200/rosters
import axios from "axios";
// import data from './afcWeek10.json'

const league = async (leagueId) => {
  const config = {};
  const url = `https://api.sleeper.app/v1/league/${leagueId}/rosters`;

  return axios.get(url, config).then((res) => {
    return res.data.map((entry) => {
      const { settings, owner_id } = entry;
      return {
        pf: settings.fpts + (settings.fpts_decimal * .01),
        pa: settings.fpts_against + (settings.fpts_against_decimal * .01),
        wins: settings.wins,
        losses: settings.losses,
        ties: settings.ties,
        ownerId: owner_id
      };
    });
  });
}

// const mock = async () => {
//   return data;
// }

export default league;