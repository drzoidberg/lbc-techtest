import React from 'react';

import logoImg from '../../assets/images/00a_register_logo.svg';

import classes from './Logo.module.scss';

const Logo = () => {
  return (
    <>
      <div className={classes['logo-box']}>
        <img src={logoImg} alt='littleBigConnection Social Network logo' className={classes['logo-box__logo']} />
      </div>
    </>
  );
};

export default Logo;
