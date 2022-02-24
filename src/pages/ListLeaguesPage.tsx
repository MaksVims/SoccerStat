import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { BannerLeague } from '../components';
import { Loader, Search } from '../components/UI';
import { useActions } from '../hooks/useActions';
import { useAppSelector } from '../hooks/useAppSelector';
import useFetch from '../hooks/useFetch';
import { SoccerStatService } from '../service';

const ListLeaguesPage: FC = () => {
  const [query, setQuery] = useState<string>('')
  const { leagues } = useAppSelector(state => state.leagues)
  const { setLeagues } = useActions()
  const [fetchLeagues, load, error] = useFetch(useCallback(async () => {
    const response = await SoccerStatService.getListLeagues()
    setLeagues(response)
  }, []))

  const filteredLeagues = useMemo(() => {
    return leagues?.competitions?.length ?
      leagues.competitions.filter(leagues => leagues.name.toLowerCase().includes(query)) :
      []
  }, [leagues, query])

  useEffect(() => {
    if (!leagues.competitions) {
      fetchLeagues()
    }
  }, [])

  const content = filteredLeagues.length ? (
    <div className="grid grid-cols-3 gap-4 w-[100%]">
      {
        filteredLeagues.map((league) => (
          <BannerLeague league={league} key={league.id} />
        ))
      }
    </div>
  ) : (
    <p className='text-center text-xl'>Указанные лиги не найдены</p>
  )

  return (
    <main className="container flex flex-col">
      <Search query={query} setQuery={setQuery} />
      <section className="flex items-center flex-col justify-center flex-1">
        {
          load ? <Loader /> 
          : error ? <h1 className='text-red-500'>{error.message}</h1>
          : content
        }
      </section>
    </main>
  )
};

export default ListLeaguesPage;
