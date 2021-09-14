import axios from "axios";
// import data from './afcTeams.json'

const teamInfo = async (leagueId) => {
  const config = {}
  const url = `https://api.sleeper.app/v1/league/${leagueId}/users`;

  return axios.get(url, config).then((res) => {
    console.log(res)
    return res.data.map((entry) => {
      const { user_id, display_name, metadata } = entry;
      const { team_name } = metadata;
      return {
        id: user_id,
        name: display_name || team_name
      };
    });
  });
}

// const mock = async () => {
//   return data.map((entry) => {
//     const { user_id, display_name, metadata } = entry;
//     const { team_name } = metadata;
//     return {
//       id: user_id,
//       name: display_name || team_name
//     };
//   });
// }

export default teamInfo;