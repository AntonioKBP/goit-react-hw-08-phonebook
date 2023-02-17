import axios from 'axios';
import { useState } from 'react';
import { Notify } from 'notiflix';

const initState = {
  email: '',
  name: '',
  password: '',
};

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(initState);
  const [isPsw, setIsPsw] = useState(false);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        values
      );
      setIsLoading(false);
      Notify.success('Success');
    } catch (error) {
      Notify.warning('Something went wrong');
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
