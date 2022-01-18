import React from 'react';

import ProgressTracker from '../../components/ProgressTracker/ProgressTracker';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import LogoIsotypeImg from '../../assets/images/00b_register_isotype.svg';
import ImgBig from '../../assets/images/01b_register_my-profile-big.svg';
import ArrowRightImg from '../../assets/images/07_arrow-right.svg';

import classes from './RegisterView.module.scss';

const RegisterView = () => {
  return (
    <>
      <div className={classes['container-view']}>
        <div className={classes['container-view__wrapper']}>
          <ProgressTracker />
          <div className={classes['my-profile-wrapper']}>
            <div className={`u-center-text ${classes['logo-main-register']}`}>
              <Logo />
            </div>
            <div className={classes['title-wrapper']}>
              <img src={LogoIsotypeImg} alt='' />
              <div className={classes['title-wrapper__heading-wrapper']}>
                <h1 className={classes['title-wrapper__heading-primary']}>My profile</h1>
                <h3 className={classes['title-wrapper__heading-sub']}>Please enter your user key</h3>
              </div>
            </div>
            <div className='info u-margin-top-big'>
              You will find your user key in the section my-profile on the LittleBig Connection platform.
            </div>
            <form className='u-margin-top-huge'>
              <Input
                labelTxt='User key'
                type='password'
                name='user-key'
                id='user-key'
                message='Your user key is valid'
              />
            </form>
            <div className={classes['button-item']}>
              <Button type='continue' icon={ArrowRightImg}>
                Continue
              </Button>
            </div>
          </div>
          <div className={classes['my-profile-big-image']}>
            <img src={ImgBig} alt='two people chatting' />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterView;
