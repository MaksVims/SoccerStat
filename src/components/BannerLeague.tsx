import React, { FC } from 'react';
import { IFetchingLeague } from '../types';
import { useLocation, useNavigate } from 'react-router-dom'

interface BannerLeagueProps {
  league: IFetchingLeague
}

const BannerLeague: FC<BannerLeagueProps> = ({ league }) => {

  const navigate = useNavigate()
  const handlerClick = () => {
    navigate(`/league/${league.id}`)
  }

  return (
    <article
      onClick={handlerClick}
      className="rounded-lg border-2 border-gray-400 hover:border-black transition-colors duration-200 p-10 cursor-pointer text-center"
    >
      <h2 className="mb-2">{league.name}</h2>
      <p className="font-medium text-xl">{league.area.name}</p>
    </article>
  )
};

export default BannerLeague;
