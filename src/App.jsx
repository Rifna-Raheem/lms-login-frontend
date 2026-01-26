import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Student from "./Student";
import Teacher from "./Teacher";
import Admin from "./Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/student" element={<Student />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
