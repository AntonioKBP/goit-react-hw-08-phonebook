export const LoginForm = () => {
  return (
    <form>
      <h1>Login page</h1>

      <div>
        <input
          type="text"
          id="email"
          name="email"
          //   value={values.email}
          //   onChange={handleChange}
          //   className="form-control"
        />
        <label htmlFor="email">Email address</label>
      </div>

      <div>
        <input
          id="password"
          type="password"
          name="password"
          //   value={values.password}
          //   onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
      </div>

      <button>Submit</button>
    </form>
  );
};
