import React from 'react';

import classes from './Button.module.scss';

const Button = ({ children, type, icon }) => {
  return (
    <button
      className={
        type === 'login'
          ? `${classes['button']}`
          : type === 'continue' && `${classes['button']} ${classes['button--next-continue']}`
      }
    >
      {children}
      {icon && <img src={icon} className={classes['icon']} />}
    </button>
  );
};

export default Button;
