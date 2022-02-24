import { IFetchingLeague, IFetchingMatch } from ".";

export interface IFetchingScheduleLeague {
  competition: IFetchingLeague,
  filters: {},
  count: number,
  matches: IFetchingMatch[]
}