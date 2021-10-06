import React from 'react';

import classes from './PhaseItem.module.scss';

const PhaseItem = ({ image, txt, altTxt, current, last }) => {
  return (
    <>
      {current ? (
        <div className={classes['phase-item-box']}>
          <span className={classes['phase-item-box__displayedText']}>{txt}</span>
          <div className={`${classes['phase-item-box__image']} ${classes['phase-item-box__image--grayed']}`}></div>
          <img src={image} alt={altTxt} className={classes['phase-item-box__image']} />
        </div>
      ) : (
        <div className={`${classes['phase-item-box']} ${classes['phase-item-box--grayed']}`}>
          <span className={classes['phase-item-box__displayedText']}>{txt}</span>
          <div className={`${classes['phase-item-box__image']} ${classes['phase-item-box__image--grayed']}`}></div>
          <img src={image} alt={altTxt} className={classes['phase-item-box__image']} />
        </div>
      )}
      {!last && <div className={classes['phase-item-separator']}></div>}
    </>
  );
};

export default PhaseItem;
