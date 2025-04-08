// src/components/auth/ForgotPasswordForm.jsx
import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // Placeholder for password reset
    alert(`Password reset email sent to ${email}`);
  };

  return (
    <form
      onSubmit={handleReset}
      className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto mt-10"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">Reset Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full mb-4 px-4 py-2 border rounded-xl"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600"
      >
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
