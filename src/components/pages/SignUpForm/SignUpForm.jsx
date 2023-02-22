import { useState } from 'react';
import { Notify } from 'notiflix';
import { publicApi } from 'components/http/http';

const initState = {
  email: '',
  name: '',
  password: '',
};

export const SignUpForm = () => {
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
      await publicApi.post('/users/signup', values);
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
        <h1>Sign up page</h1>

        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Name</label>
        </div>

        <div>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
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

        <button type="submit">Sign In</button>
      </form>
    </>
  );
};
