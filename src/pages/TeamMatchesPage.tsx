import React, { FC, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { IFetchingMatch } from '../types';
import { SoccerStatService } from '../service'

const TeamMatchesPage: FC = () => {
  const [matches, setMatches] = useState<IFetchingMatch[]>([])
  const { id: teamId } = useParams()

  useEffect(() => {
    const fetchMatch = async () => {
      const response = await SoccerStatService.getScheduledTeam(Number(teamId))
      setMatches(response)
    }
    fetchMatch()
  }, [])

  console.log(matches);


  return (
    <main>
      <h1>Матчи</h1>
    </main>
  )
};

export default TeamMatchesPage;
