import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components'

const Layout:FC = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;
