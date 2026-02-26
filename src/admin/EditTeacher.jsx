import { useState, useEffect } from "react";
import axios from "axios";

export default function EditTeacher({ teacher, onClose, onSuccess }) {

  const [form, setForm] = useState({
    full_name: "",
    name_with_initial: "",
    nic: "",
    email: "",
    phone: "",
    whatsapp: ""
  });

  // Load teacher data into form
  useEffect(() => {
    if (teacher) {
      setForm(teacher);
    }
  }, [teacher]);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async () => {
    try {

      await axios.put(
        `http://127.0.0.1:8000/api/teachers/${teacher.id}`,
        form,
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }
      );

      alert("Teacher updated successfully");

      if (onSuccess) onSuccess();
      if (onClose) onClose();

    } catch (error) {

  console.error("FULL ERROR:", error);

  if (error.response) {
    console.error("Backend response:", error.response.data);
    alert(JSON.stringify(error.response.data));
  } else {
    alert("Server not reachable");
  }

}

  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button
          className="modal-close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>Edit Teacher</h2>

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

<div className="form-group1">

          <label>Phone Number</label>
          <input
            name="phone"
            value={form.phone}
            placeholder="Phone"
            onChange={handleChange}
          />
</div>

<div className="form-group2">
           <label>WhatsApp Number</label>
          <input
            name="whatsapp"
            value={form.whatsapp}
            placeholder="WhatsApp"
            onChange={handleChange}
          />
</div>

          <button onClick={handleUpdate}>
            Update Teacher
          </button>

        </div>

      </div>

    </div>
  );
}
