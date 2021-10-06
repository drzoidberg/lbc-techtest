import React from 'react';

import uuid from '../../lib/generateUuid';

import Logo from '../Logo/Logo';
import PhaseItem from './PhaseItem/PhaseItem';
import Button from '../Button/Button';

import aboutMe from '../../assets/images/02_register_about-me.svg';
import myProfileImg from '../../assets/images/01_register_my-profile.svg';
import settingsImg from '../../assets/images/03_register_settings.svg';
import congratulationsImg from '../../assets/images/04_register_congratulations.svg';

import classes from './ProgressTracker.module.scss';

const ProgressTracker = () => {
  return (
    <>
      <nav className={classes['progress-tracker']}>
        <ul className={classes['progress-tracker__list']}>
          <li>
            <Logo />
          </li>
          {[
            { key: uuid(), image: myProfileImg, txt: 'My profile', altTxt: 'My profile', current: true, last: false },
            { key: uuid(), image: aboutMe, txt: 'About me', altTxt: 'About me', current: false, last: false },
            { key: uuid(), image: settingsImg, txt: 'Settings', altTxt: 'Settings', current: false, last: false },
            {
              key: uuid(),
              image: congratulationsImg,
              txt: 'Congratulations',
              altTxt: 'Congratulations',
              current: false,
              last: true,
            },
          ].map((phaseItem) => (
            <li key={phaseItem.key}>
              <PhaseItem
                image={phaseItem.image}
                txt={phaseItem.txt}
                altTxt={phaseItem.altTxt}
                current={phaseItem.current}
                last={phaseItem.last}
              />
            </li>
          ))}
          <li>
            <div className={classes['progress-tracker__login-item']}>
              <span>Already registered:</span>
              <Button type='login'>Login</Button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ProgressTracker;
