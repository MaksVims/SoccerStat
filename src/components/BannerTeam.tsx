import React, { FC } from 'react';
import { IFetchingTeam } from '../types';
import { useNavigate } from 'react-router-dom'

interface BannerTeamProps {
  team: IFetchingTeam
}

const BannerTeam: FC<BannerTeamProps> = ({ team }) => {
  const navigate = useNavigate()
  const handlerClick = () => {
    navigate(`/teams/${team.id}`)
  }

  return (
    <article
      onClick={handlerClick}
      className="rounded-lg border-2 border-gray-400 hover:border-black transition-colors duration-200 p-10 cursor-pointer text-center"
    >
      <h2 className="mb-4 text-xl font-medium">{team.shortName}</h2>
      <div className="max-h-[200px] max-w-[200px]">
        <img className="object-contain" src={team.crestUrl} alt={team.shortName} />
      </div>
    </article>
  )
};

export default BannerTeam;
