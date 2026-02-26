import { useState } from "react";
import TeacherList from "./TeacherList";
import AddTeacher from "./AddTeacher";
import "./admin.css";
import Settings from "./Settings";


export default function AdminDashboard() {
  const [page, setPage] = useState("teachers");

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2>LMS Admin</h2>

        <button onClick={() => setPage("teachers")}>
          Teachers
        </button>

        <button onClick={() => setPage("settings")}>
          Settings
        </button>


        
      </aside>

      <main className="content">
        {page === "teachers" && <TeacherList />}
        {page === "addTeacher" && <AddTeacher />}
        {page === "settings" && <Settings />}

      </main>
    </div>
  );
}
