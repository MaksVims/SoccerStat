import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layout';
import { LeagueMatchesPage, ListLeaguesPage, ListTeamsPage, TeamMatchesPage } from '../pages';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<ListLeaguesPage />} />
      <Route path='/league/:id' element={<LeagueMatchesPage />} />
      <Route path="/teams" element={<ListTeamsPage />} />
      <Route path="/teams/:id" element={<TeamMatchesPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
