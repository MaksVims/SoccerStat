import React, { FC } from 'react';
import { Link, useMatch } from 'react-router-dom';
import cl from 'classnames'

interface CustomLinkProps {
  to: string,
}

const CustomLink: FC<CustomLinkProps> = ({ to, children }) => {
  const isActive = useMatch({
    path: to,
    end: to === '/',
  })

  const classes = cl({
    'nav-link--active': isActive,
    'nav-link': true,
  })

  return (
    <Link
      to={to}
      className={classes}
    >
      {children}
    </Link>
  )
};

export default CustomLink;
