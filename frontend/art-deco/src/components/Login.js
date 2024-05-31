import React from 'react';

const Login = () => {
  return (
    <section className="login">
      <h2>Login</h2>
      <form>
        <label>Email: <input type="email" name="email" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <button type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;
