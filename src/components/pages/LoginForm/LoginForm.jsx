import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.thunk';
import { Button } from '../SignUpForm/SignUpForm.styled';

import css from './LoginForm.module.css';

const initState = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [values, setValues] = useState(initState);
  const [isPsw, setIsPsw] = useState(false);

  const dispatch = useDispatch();
  // const loading = useSelector(selectAuthLoading);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(loginThunk(values));
  };

  return (
    <>
      {' '}
      <div className={css.container}>
        <form className={css.form} onSubmit={handleSubmit}>
          <h2 className={css.title}>Login page</h2>

          <div className={css.div}>
            <label className={css.label} htmlFor="email">
              Email address
            </label>
            <input
              className={css.input}
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </div>

          <div className={css.div}>
            <label className={css.label} htmlFor="password">
              Password
            </label>
            <input
              className={css.input}
              id="password"
              type={isPsw ? 'password' : 'text'}
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Enter Password"
            />

            <button
              className={css.pswBtn}
              type="button"
              onClick={() => setIsPsw(prev => !prev)}
            >
              show password
            </button>
          </div>

          <Button className={css.button} type="submit">
            Login
          </Button>
        </form>
      </div>
    </>
  );
};
