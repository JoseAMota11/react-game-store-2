import React, { useState, useRef } from 'react';
import classnames from '../../helpers/classnames';
import Link from '../Router/Link';
import useLocalStorage from '../../hooks/useLocalStorage';
import {
  validateEmail,
  validatePassword,
} from '../../helpers/validateFunctions';
import navigate from '../../helpers/navigate';
import Error from '../Error/Error';

const USER_KEY = 'user';

function Login() {
  const [selectedLogin, setSelectedLogin] = useState(true);
  const [selectedRegister, setSelectedRegister] = useState(false);
  const [savedUser, setSavedUser] = useLocalStorage(USER_KEY, '');
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
  });
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const refPasswordConfirmation = useRef(null);
  const [error, setError] = useState({
    status: false,
    message: '',
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    const { email, password } = savedUser;

    if (user.email === email && password === user.password) {
      setUser({
        email: '',
        password: '',
        passwordConfirmation: '',
      });
      setError(() => ({ status: true, message: '' }));
      navigate('/');
    }

    if (user.email !== email) {
      setError(() => ({ status: true, message: 'This email does not exist.' }));
      refEmail.current.classList.add('outline');
      return;
    }
    if (password !== user.password) {
      refEmail.current.classList.remove('outline');
      refPassword.current.classList.add('outline');
      setError(() => ({
        status: true,
        message: 'That password was incorrect. Please try again.',
      }));
    }
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation } = user;

    const validatedEmail = validateEmail(email);
    const validatedPassword = validatePassword(password, passwordConfirmation);

    if (validatedEmail && validatedPassword) {
      setSavedUser({
        email: validatedEmail,
        password: validatedPassword,
      });
      navigate('/');
    }

    if (!validatedEmail) {
      setError(() => ({ status: true, message: 'This email is not valid.' }));
      refEmail.current.classList.add('outline');
      return;
    }
    if (!validatedPassword) {
      refEmail.current.classList.remove('outline');
      refPassword.current.classList.add('outline');
      refPasswordConfirmation.current.classList.add('outline');
      setError(() => ({
        status: true,
        message: 'Password do not match',
      }));
    }
  };

  return (
    <div className="center-login">
      <form
        className="login"
        onSubmit={selectedLogin ? handleSubmitLogin : handleSubmitRegister}
      >
        <h3 className="login-title">{selectedLogin ? 'Login' : 'Register'}</h3>
        <div className="login-options">
          <button
            type="button"
            onClick={loginUser}
            className={classnames('options__login', {
              selected: selectedLogin,
            })}
          >
            Login
          </button>
          <button
            type="button"
            onClick={registerUser}
            className={classnames('options__register', {
              selected: selectedRegister,
            })}
          >
            Register
          </button>
        </div>
        {error.status ? (
          <Error errorMessage={error.message} className="login-error" />
        ) : null}
        <div className="login-email">
          <ion-icon name="mail-outline" />
          <input
            className="login-email__input"
            type="email"
            placeholder={selectedRegister ? 'Email' : 'E.g. example@gmail.com'}
            onChange={(e) => handleChange(e)}
            name="email"
            maxLength={50}
            value={user.email}
            ref={refEmail}
          />
        </div>
        <div className="login-password">
          <ion-icon name="lock-closed-outline" />
          <input
            className="login-password__input"
            type="password"
            placeholder={selectedRegister ? 'Password' : '********'}
            onChange={(e) => handleChange(e)}
            name="password"
            maxLength={30}
            value={user.password}
            ref={refPassword}
          />
        </div>
        {selectedRegister ? (
          <div className="login-password">
            <ion-icon name="lock-closed-outline" />
            <input
              className="login-password__input"
              type="password"
              placeholder="Confirm password"
              onChange={(e) => handleChange(e)}
              name="passwordConfirmation"
              maxLength={30}
              value={user.passwordConfirmation}
              ref={refPasswordConfirmation}
            />
          </div>
        ) : null}
        <button className="login-button" type="submit">
          {selectedLogin ? 'Login' : 'Register'}
        </button>
        <Link to="/" className="login-back">
          Already got an account?
        </Link>
      </form>
    </div>
  );
}

export default Login;
