import React from 'react';
import scss from './Container.module.scss';

function Container({ children }) {
  return <div className={scss.container}>{children}</div>;
}

export default Container;