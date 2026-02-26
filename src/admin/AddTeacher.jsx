import { useState } from "react";
import axios from "axios";

export default function AddTeacher(props) {
  const [form, setForm] = useState({
    full_name: "",
    name_with_initial: "",
    nic: "",
    email: "",
    phone: "",
    whatsapp: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
  try {
    await axios.post(
      "http://127.0.0.1:8000/api/teachers",
      form,
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
      }
    );

    alert("Teacher created & password sent");

    setForm({
      full_name: "",
      name_with_initial: "",
      nic: "",
      email: "",
      phone: "",
      whatsapp: "",
    });

    if (props.onSuccess) props.onSuccess();

  } catch (error) {
    console.error("Backend error:", error.response?.data);
    alert(JSON.stringify(error.response?.data));
  }
};


  return (
    <div className="add-teacher-container">
      <h2>Add Teacher</h2>

       <div className="add-teacher-form">
<input
  name="full_name"
  value={form.full_name}
  placeholder="Full Name"
  onChange={handleChange}
/>

<input
  name="name_with_initial"
  value={form.name_with_initial}
  placeholder="Name with Initial"
  onChange={handleChange}
/>

<input
  name="nic"
  value={form.nic}
  placeholder="NIC"
  onChange={handleChange}
/>

<input
  name="email"
  value={form.email}
  placeholder="Email"
  onChange={handleChange}
/>

<input
  name="phone"
  value={form.phone}
  placeholder="Phone"
  onChange={handleChange}
/>

<input
  name="whatsapp"
  value={form.whatsapp}
  placeholder="WhatsApp"
  onChange={handleChange}
/>


      <button onClick={handleSubmit}>Create Teacher</button>
    </div>
     </div>
  );
}
