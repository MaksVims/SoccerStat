import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../layout';
import { LeagueMatchesPage, ListLeaguesPage, ListTeamsPage, TeamMatchesPage } from '../pages';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to={'/leagues'} replace/>}/>
      <Route path='/leagues' element={<ListLeaguesPage />} />
      <Route path='/leagues/:id' element={<LeagueMatchesPage />} />
      <Route path="/teams" element={<ListTeamsPage />} />
      <Route path="/teams/:id" element={<TeamMatchesPage />} />
      <Route path='*' element={<Navigate to={'/leagues'} replace/>}/>
    </Route>
  </Routes>
);

export default AppRouter;
