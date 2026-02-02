import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/login",
        { username, password }
      );

      if (res.data.role === "student") navigate("/student");
      if (res.data.role === "teacher") navigate("/teacher");
      if (res.data.role === "admin") navigate("/admin");
    } catch {
      alert("Invalid username or password");
    }
  };

  return (
    
  <div className="login-wrapper">
    
    {/* Left Panel */}
    <div className="login-left">
      <h1>Welcome Back</h1>
      <p>
        Access your dashboard and continue your learning journey with us.
      </p>
    </div>

    {/* Right Panel */}
    <div className="login-right">
      <h2>Login Account</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>

  </div>


  );
}

export default Login;
