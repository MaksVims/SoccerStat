import React, { FC } from 'react';
import { Search } from '../components/UI';

const ListLeaguesPage: FC = () => {
  const handlerChangeQuery = (query: string) => {
    console.log(query)
  }

  return (
    <main className="container">
      <Search changeHandler={handlerChangeQuery} />
      <h1>League list page</h1>
    </main>
  )
};

export default ListLeaguesPage;
