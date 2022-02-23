import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

const LeagueMatchesPage: FC = () => {

  const { id } = useParams()

  return (
    <div>
      List league page {id}
    </div>
  )
};

export default LeagueMatchesPage;
