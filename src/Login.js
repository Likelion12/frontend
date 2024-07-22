import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        계정이 없으신가요? <a href="/signup">회원가입</a>
      </p>
    </div>
  );
}

export default Login;
