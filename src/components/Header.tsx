import React, { FC } from 'react';
import { CustomLink } from './UI';

const Header: FC = () => (
  <header className="bg-gray-300 mb-4">
    <div className="flex items-center px-2">
      <div className="h-10 w-16 flex items-center justify-center mr-8">
        <h1 className="font-bold text-3xl">ST</h1>
      </div>
      <nav className="space-x-10">
        <CustomLink to="/leagues">
          Лиги
        </CustomLink>
        <CustomLink to="/teams">
          Команды
        </CustomLink>
      </nav>
    </div>
  </header>
);

export default Header;
