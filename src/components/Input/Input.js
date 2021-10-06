import React from 'react';

import checkImg from '../../assets/images/05_register_form_check.svg';
import lockImg from '../../assets/images/06_register_form_lock.svg';

import classes from './Input.module.scss';

const Input = ({ labelTxt, name, id, value, type, message }) => {
  return (
    <>
      <label htmlFor={name} className='input-label'>
        {labelTxt}:
      </label>
      {type === 'text' ? (
        <>
          <input type={type} name={name} id={id} value={value} className={classes['input-text']} />
          {message && <span className='input-message input-message__success '>{message}</span>}
        </>
      ) : (
        type === 'password' && (
          <div className={classes['password-group']}>
            <img src={lockImg} className={classes['password-group__img-lock']} />
            <input
              type={type}
              name={name}
              id={id}
              value={value}
              className={classes['password-group__input-password']}
            />
            <img src={checkImg} className={classes['password-group__img-check']} />
            {message && <span className='input-message input-message__success '>{message}</span>}
          </div>
        )
      )}
    </>
  );
};

export default Input;
