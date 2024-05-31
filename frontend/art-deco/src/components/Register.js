import React from 'react';

const Register = () => {
  return (
    <section className="register">
      <h2>Register</h2>
      <form>
        <label>Name: <input type="text" name="name" /></label>
        <label>Surname: <input type="text" name="surname" /></label>
        <label>Email: <input type="email" name="email" /></label>
        <label>Password: <input type="password" name="password" /></label>
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;
