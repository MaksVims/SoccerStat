import { createSlice } from "@reduxjs/toolkit";
import { IFetchingListLeagues } from "../../types";

interface ILeaguesState {
  leagues: IFetchingListLeagues,
}

const initialState: ILeaguesState = {
  leagues: {} as IFetchingListLeagues,
} 

const leaguesSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {
    setLeagues:(state, action) => {
      state.leagues = action.payload
    }
  } 
})

export default leaguesSlice