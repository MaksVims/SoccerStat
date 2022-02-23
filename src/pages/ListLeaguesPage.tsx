import React, { FC, useEffect, useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import { BannerLeague } from '../components';
import { Search } from '../components/UI';
import { SoccerStatService } from '../service';
import { IFetchingListLeagues } from '../types';

const ListLeaguesPage: FC = () => {
  const [data, setData] = useState<IFetchingListLeagues | null>(null)
  const handlerChangeQuery = (query: string) => {
    console.log(query)
  }

  useEffect(() => {
    const loadData = async () => {
      const fetchData = await SoccerStatService.getListLeagues()
      setData(fetchData)
    }
    loadData()
  }, [])

  return (
    <main className="container">
      <Search changeHandler={handlerChangeQuery} />
      <section className="grid grid-cols-3 gap-4">
        {
          data?.competitions?.map((league) => (
            <BannerLeague league={league} key={league.id} />
          ))
        }
      </section>

    </main>
  )
};

export default ListLeaguesPage;
