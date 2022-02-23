import { IFetchingTeam } from './fetchingTeam';

export interface IFetchingListTeams {
  count: number,
  filters: {},
  teams: IFetchingTeam[]
}
