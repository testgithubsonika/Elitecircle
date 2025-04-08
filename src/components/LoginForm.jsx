// src/components/auth/LoginForm.jsx
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for actual auth logic
    alert(`Logging in with ${email}`);
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-2 border rounded-xl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-4 py-2 border rounded-xl"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
      >
        Login
      </button>
      <p className="text-sm text-center mt-4">
        <a href="/forgot-password" className="text-blue-500 hover:underline">
          Forgot Password?
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
