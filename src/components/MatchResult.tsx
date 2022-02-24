import React, { FC } from 'react';
import { ScoreMatch } from '.';
import { formatDateToMatch, getStatusMatch } from '../helpers';
import { IFetchingMatch } from '../types';

interface MatchResultProps {
  match: IFetchingMatch
}

const MatchResult: FC<MatchResultProps> = ({ match }) => (
  <article className="match-result">
    <span>{formatDateToMatch(match.utcDate)}</span>
    <span>{getStatusMatch(match.status)}</span>
    <span className="text-right">{match.homeTeam.name}</span>
    <span>-</span>
    <span className="text-left">{match.awayTeam.name}</span>
    <ScoreMatch match={match} />
  </article>
);

export default MatchResult;
