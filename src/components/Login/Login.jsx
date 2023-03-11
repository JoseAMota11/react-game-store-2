import { useState } from 'react';
import { classnames } from '../../helpers/classnames';

export const Login = () => {
  const [selectedLogin, setSelectedLogin] = useState(true);
  const [selectedRegister, setSelectedRegister] = useState(false);

  const loginUser = () => {
    if (!selectedLogin) {
      setSelectedLogin((prevState) => !prevState);
      setSelectedRegister((prevState) => !prevState);
    }
  };

  const registerUser = () => {
    if (!selectedRegister) {
      setSelectedLogin((prevState) => !prevState);
      setSelectedRegister((prevState) => !prevState);
    }
  };

  return (
    <div className='login'>
      <h3 className='login-title'>{selectedLogin ? 'Login' : 'Register'}</h3>
      <div className='login-options'>
        <button
          onClick={loginUser}
          className={classnames('options__login', { selected: selectedLogin })}
        >
          Login
        </button>
        <button
          onClick={registerUser}
          className={classnames('options__register', {
            selected: selectedRegister,
          })}
        >
          Register
        </button>
      </div>
      <div className='login-email'>
        <ion-icon name='mail-outline'></ion-icon>
        <input
          className='login-email__input'
          type='email'
          placeholder={selectedRegister ? 'Email' : 'E.g. example@gmail.com'}
        />
      </div>
      <div className='login-password'>
        <ion-icon name='lock-closed-outline'></ion-icon>
        <input
          className='login-password__input'
          type='password'
          placeholder={selectedRegister ? 'Password' : '********'}
        />
      </div>
      {selectedRegister ? (
        <div className='login-password'>
          <ion-icon name='lock-closed-outline'></ion-icon>
          <input
            className='login-password__input'
            type='password'
            placeholder='Confirm password'
          />
        </div>
      ) : null}
      <button className='login-button'>
        {selectedLogin ? 'Login' : 'Register'}
      </button>
    </div>
  );
};
