const url = 'http://games.espn.com/ffl/api/v2'
const urls = {
  base: url,
  scoreboard: `${url}/scoreboard`,
  teams: `${url}/teams`,
  pendingMoveBatches: `${url}/teams/pendingMoveBatches`,
  leagueSettings: `${url}/leagueSettings`,
  playerInfo: `${url}/playerInfo`,
  'player/news': `${url}/player/news`,
  recentActivity: `${url}/recentActivity`,
  leagueSchedules: `${url}/leagueSchedules`,
  rosterInfo: `${url}/rosterInfo`,
  schedule: `${url}/schedule`,
  polls: `${url}/polls`,
  messageboard: `${url}/messageboard`,
  status: `${url}/status`,
  tweets: `${url}/tweets`,
  stories: `${url}/stories`,
  livescoring: `${url}/livescoring`,
  boxscore: `${url}/boxscore`
}

export default urls;