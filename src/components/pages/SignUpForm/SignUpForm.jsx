import { useState } from 'react';

const initState = {
  email: '',
  name: '',
  password: '',
};

export const SignUpForm = () => {
  const [values, setValues] = useState(initState);

  const handleChange = e => {
    const { value, name } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up page</h1>

      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          //   className="form-control"
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
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
      </div>

      <button>Submit</button>
    </form>
  );
};
