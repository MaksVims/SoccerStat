export interface IFetchingLeague {
  id: number,
  name: string
  area: {
    ensignUrl: string,
    id: number,
    name: string,
    countryCode: string
  }
}
