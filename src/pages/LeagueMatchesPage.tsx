import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IFetchingScheduleLeague } from '../types';
import { AiFillCaretRight } from 'react-icons/ai'
import useFetch from '../hooks/useFetch';
import { SoccerStatService } from '../service';
import { MatchResult } from '../components';

const LeagueMatchesPage: FC = () => {
  const navigate = useNavigate()
  const [scheduleLeague, setScheduleLeague] = useState<IFetchingScheduleLeague>({} as IFetchingScheduleLeague)
  const { id } = useParams()
  const [fetchMatches, load, error] = useFetch(async () => {
    const response = await SoccerStatService.getMatchesLeague(Number(id))
    setScheduleLeague(response)
  })

  useEffect(() => {
    fetchMatches()
  }, [])

  return (
    <main className="container">
      <div className="flex items-center space-x-2 mb-6">
        <span onClick={() => navigate('/leagues')} className="cursor-pointer hover:text-blue-400">Лиги</span>
        <AiFillCaretRight size={10} />
        <span>{scheduleLeague?.competition?.name}</span>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Матчи</h2>
      <section>
        <ul>
          {
            scheduleLeague?.matches?.map(match => (
              <li key={match.id}>
                <MatchResult match={match} />
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  )
};

export default LeagueMatchesPage;
