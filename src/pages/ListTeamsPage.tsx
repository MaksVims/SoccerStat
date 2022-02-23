import React, { FC, useState, useEffect } from 'react';
import { IFetchingListTeams } from '../types';
import { SoccerStatService } from '../service';
import { Search } from '../components/UI';
import { BannerTeam } from '../components';

const ListTeamsPage: FC = () => {
  const [data, setData] = useState<IFetchingListTeams | null>(null)
  const handlerChangeQuery = (query: string) => {
    console.log(query)
  }

  useEffect(() => {
    const loadData = async () => {
      const fetchData = await SoccerStatService.getListTeam()
      setData(fetchData)
    }
    loadData()
  }, [])
  
  return (
    <main className="container">
      <Search changeHandler={handlerChangeQuery} />
      <section className="grid grid-cols-5 gap-4">
        {
          data?.teams?.map((team) => (
            <BannerTeam team={team} key={team.id} />
          ))
        }
      </section>

    </main>
  )
};

export default ListTeamsPage;
