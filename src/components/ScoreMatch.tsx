import React, { FC } from "react";
import { IFetchingMatch } from "../types";

interface ScoreMatchProps {
  match: IFetchingMatch
}

const ScoreMatch: FC<ScoreMatchProps> = ({ match }) => {
  return (
    <span>
      <span>
        {match.score.fullTime.homeTeam}:{match.score.fullTime.awayTeam}
      </span>
      {
        match.score.extraTime.homeTeam !== null &&
        <span className="ml-1 text-gray-500">
          ({match.score.extraTime.homeTeam}:{match.score.extraTime.awayTeam})
        </span>
      }
      {
        match.score.penalties.homeTeam !== null &&
        <span className="ml-1 text-gray-500">
          ({match.score.penalties.homeTeam}:{match.score.penalties.awayTeam})
        </span>
      }
    </span>
  )
}

export default ScoreMatch