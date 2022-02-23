import { MATCH_STATUS } from './matchStatus';

export interface IFetchingMatch {
  id: number,
  awayTeam: {
    id: number,
    name: string
  },
  homeTeam: {
    id: number,
    name: string
  },
  utcDate: string,
  status: MATCH_STATUS,
  score: {
    fullTime: {
      homeTeam: number,
      awayTeam: number,
    },
    extraTime: {
      homeTeam: number | null,
      awayTeam: number | null,
    },
    penalties: {
      homeTeam: number | null,
      awayTeam: number | null,
    }
  }
}
