import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layout';
import { ListLeaguesPage, ListTeamsPage } from '../pages';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<ListLeaguesPage />} />
      <Route path="/teams" element={<ListTeamsPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
