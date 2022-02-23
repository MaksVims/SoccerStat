import { loadSoccerServiceData } from '../helpers';

export default class SoccerStatService {
  static async getListLeagues() {
    const URL = 'http://api.football-data.org/v2/competitions'
    return loadSoccerServiceData(URL)
  }

  static async getListTeam() {
    const URL = 'http://api.football-data.org/v2/teams'
    return loadSoccerServiceData(URL)
  }

  static async getMatchesLeague(id: number) {
    const URL = `http://api.football-data.org/v2/competitions/${id}/matches`
    return loadSoccerServiceData(URL)
  }

  static async getScheduledTeam(id: number) {
    const URL = `http://api.football-data.org/v2/teams/${id}/matches/`
    return loadSoccerServiceData(URL)
  }

  static async getScheduledLeague(id: number) {
    const URL = `http://api.football-data.org/v2/competitions/${id}/matches?matchday=1`
    return loadSoccerServiceData(URL)
  }
}
