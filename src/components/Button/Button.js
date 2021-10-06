import React from 'react';

import classes from './Button.module.scss';

const Button = ({ children, type }) => {
  return (
    <button
      className={
        type === 'login'
          ? `${classes['button']}`
          : type === 'next-register' && `${classes['button']} ${classes['button--next-register']}`
      }
    >
      {children}
    </button>
  );
};

export default Button;
