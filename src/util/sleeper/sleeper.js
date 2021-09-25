import axios from "axios";

const teamInfo = async (leagueId) => {
  const config = {}
  const url = `https://api.sleeper.app/v1/league/${leagueId}/users`;

  return axios.get(url, config).then((res) => {
    return res.data.map((entry) => {
      const { user_id, display_name, metadata } = entry;
      const { team_name } = metadata;
      return {
        id: user_id,
        name: display_name || team_name
      };
    });
  });
};

const teamData = async (leagueId) => {
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

const leagueInfo = async (leagueId) => {
  const config = {}
  const url = `https://api.sleeper.app/v1/league/${leagueId}`;

  return axios.get(url, config).then(res => {
    return {season: res.data.season, name: res.data.name}
  });
};

export {teamData, teamInfo, leagueInfo};