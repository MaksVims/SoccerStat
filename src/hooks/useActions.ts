import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { leaguesSlice } from "../store/slices";

export function useActions() {
  const dispatch = useDispatch<AppDispatch>()
  return bindActionCreators(leaguesSlice.actions, dispatch)
}