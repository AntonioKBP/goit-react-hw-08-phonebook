import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'redux/auth/auth.thunk';
import css from './SignUpForm.module.css';
import { Button } from './SignUpForm.styled';

const initState = {
  email: '',
  name: '',
  password: '',
};

export const SignUpForm = () => {
  const [values, setValues] = useState(initState);
  const [isPsw, setIsPsw] = useState(false);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(registrationThunk(values));
  };

  return (
    <>
      {' '}
      <div className={css.container}>
        {' '}
        <form className={css.form} onSubmit={handleSubmit}>
          <h2 className={css.title}>Sign up page</h2>

          <div className={css.div}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <input
              className={css.input}
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter Name"
            />
          </div>

          <div className={css.div}>
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <input
              className={css.input}
              id="email"
              type="email"
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

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    </>
  );
};
