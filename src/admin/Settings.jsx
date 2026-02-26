import { useEffect, useState } from "react";
import axios from "axios";

export default function Settings() {
  const [method, setMethod] = useState("both");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/settings")
      .then(res => setMethod(res.data.password_send_method));
  }, []);

  const saveSettings = () => {
    axios.post("http://127.0.0.1:8000/api/settings", {
      password_send_method: method
    }).then(() => {
      alert("Settings updated successfully");
    });
  };

  return (
    <div className="settings-container">
      <h2>Admin Settings</h2>

      <label>
        <input
          type="radio"
          value="email"
          checked={method === "email"}
          onChange={() => setMethod("email")}
        />
        Email only
      </label>

      <br />

      <label>
        <input
          type="radio"
          value="sms"
          checked={method === "sms"}
          onChange={() => setMethod("sms")}
        />
        SMS only
      </label>

      <br />

      <label>
        <input
          type="radio"
          value="both"
          checked={method === "both"}
          onChange={() => setMethod("both")}
        />
        Email + SMS (Default)
      </label>

      <br /><br />

      <button onClick={saveSettings}>Save</button>
    </div>
  );
}
