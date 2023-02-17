import { useState } from 'react';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginThunk } from 'redux/auth/auth.thunk';
import { selectAuthLoading } from 'redux/auth/auth-selectors';

const initState = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initState);
  const [isPsw, setIsPsw] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await dispatch(authLoginThunk(values)).unwrap();
      console.log(data);
      Notify.success('Loginned successfuly');
    } catch (error) {
      Notify.warning('Wrong email or password');
    }
  };
  return (
    <>
      {' '}
      {isLoading && <p>Loading</p>}
      <form onSubmit={handleSubmit}>
        <h1>Login page</h1>

        <div>
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email address</label>
        </div>

        <div>
          <input
            id="password"
            type={isPsw ? 'password' : 'text'}
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <button type="button" onClick={() => setIsPsw(prev => !prev)}>
            show password
          </button>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};
