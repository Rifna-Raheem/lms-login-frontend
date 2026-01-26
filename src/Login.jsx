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
    <div className="login">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
