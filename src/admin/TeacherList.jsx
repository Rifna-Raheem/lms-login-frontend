import { useEffect, useState } from "react";
import axios from "axios";
import AddTeacher from "./AddTeacher";
import EditTeacher from "./EditTeacher";
import DeleteTeacherModal from "./DeleteTeacherModal";


export default function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [openStatusMenu, setOpenStatusMenu] = useState(null);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState(null);

  
  const fetchTeachers = () => {
    axios.get("http://127.0.0.1:8000/api/teachers")
      .then(res => {
        setTeachers(res.data);
        setFilteredTeachers(res.data);
      });
  };

  const confirmDelete = async () => {
  try {
    await axios.delete(
      `http://127.0.0.1:8000/api/teachers/${teacherToDelete.id}`
    );

    setShowDeleteModal(false);
    setTeacherToDelete(null);

    fetchTeachers();

  } catch (error) {
    alert("Delete failed");
    console.error(error);
  }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  // 🔎 Search Filter
  useEffect(() => {
    const filtered = teachers.filter(t =>
      t.full_name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTeachers(filtered);
  }, [search, teachers]);

  const updateStatus = (id, status) => {
    axios.put(`http://127.0.0.1:8000/api/teachers/${id}/status`, {
      status
    }).then(() => {
      fetchTeachers();
      setOpenStatusMenu(null);
    });
  };


  const getStatusBadge = (status) => {
    const colors = {
      active: "#16a34a",
      frozen: "#f59e0b",
      blocked: "#dc2626"
    };

    return (
      <span style={{
        background: colors[status],
        color: "white",
        padding: "3px 8px",
        borderRadius: "12px",
        fontSize: "12px",
         width: "70px",          //  FIXED WIDTH
        textAlign: "center"  
      }}>
        {status}
      </span>
    );
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* 🔷 Header Section */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <h2>Teachers</h2>

        <div style={{ display: "flex", gap: "10px" }}>
          {/* Search */}
          <input
            type="text"
            placeholder="Search teacher..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "6px 10px",
              borderRadius: "5px",
              border: "1px solid #ccc"
            }}
          />

          {/* Add Teacher Button */}
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: "#28a745",
              color: "white",
              border: "none",
              padding: "7px 15px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            + Add Teacher
          </button>
        </div>
      </div>

      {/* 🔷 Table */}
      <table width="100%" border="0" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead style={{ background: "#f5f5f5" }}>
          <tr>
            <th align="left">Code</th>
            <th align="left">Name</th>
            <th align="left">Email</th>
            <th align="left">Status</th>
            <th align="left">Action</th>
           
          </tr>
        </thead>

        <tbody>
          {filteredTeachers.length === 0 ? (
          <tr>
            <td colSpan="5" style={{ textAlign: "center", padding: "30px" }}>
              <div className="no-results">
                No teachers found
              </div>
            </td>
          </tr>
  ) : (
  filteredTeachers.map(t => (
    <tr key={t.id} style={{ borderBottom: "1px solid #eee" }}>
      <td>{t.teacher_code}</td>
      <td>{t.full_name}</td>
      <td>{t.email}</td>

      {/* STATUS COLUMN */}
      <td style={{ position: "relative" }}>
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    
    {getStatusBadge(t.status)}

    {/* 3 Dots Button */}
    <button
      onClick={() =>
        setOpenStatusMenu(openStatusMenu === t.id ? null : t.id)
      }
      className="status-menu-btn"
    >
       ⋮
    </button>

    {/* Dropdown */}
    {openStatusMenu === t.id && (
      <div className="status-dropdown">
        {t.status !== "active" && (
          <div
            className="status-option"
            onClick={() => {
              updateStatus(t.id, "active");
              setOpenStatusMenu(null);
            }}
          >
            Activate
          </div>
        )}

        {t.status !== "frozen" && (
          <div
            className="status-option"
            onClick={() => {
              updateStatus(t.id, "frozen");
              setOpenStatusMenu(null);
            }}
          >
            Freeze
          </div>
        )}

        {t.status !== "blocked" && (
          <div
            className="status-option"
            onClick={() => {
              updateStatus(t.id, "blocked");
              setOpenStatusMenu(null);
            }}
          >
            Block
          </div>
        )}
      </div>
    )}

  </div>
</td>


      <td>
  <div className="action-buttons">
    <button 
     className="edit-btn"
     onClick={() => {
      setEditingTeacher(t);
      setShowEditModal(true);
     }}
    > 
      Edit
    </button>

    <span className="action-divider"></span>

    <button
      className="delete-btn"
      onClick={() => {
        setTeacherToDelete(t);
        setShowDeleteModal(true);
        }}
    >
      Delete
    </button>
  </div>
</td>

    </tr>
  ))
)}
</tbody>

      </table>


      {/* 🔷 Modal */}
      {showModal && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <button
              className="modal-close-btn"
              onClick={() => setShowModal(false)}
              >
              ✕
            </button>


            <AddTeacher onSuccess={() => {
              setShowModal(false);
              fetchTeachers();
            }} />
          </div>
        </div>
      )}

      {showEditModal && (
      <EditTeacher
        teacher={editingTeacher}
        onClose={() => setShowEditModal(false)}
        onSuccess={() => {
          setShowEditModal(false);
          fetchTeachers();
        }}
        />
       )}

       {showDeleteModal && (
         <DeleteTeacherModal
            teacher={teacherToDelete}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={confirmDelete}
         />
       )}


    </div>
  );

  
}

const menuItem = {
  padding: "8px 15px",
  cursor: "pointer"
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalStyle = {
  position: "relative", 
  background: "white",
  padding: "20px",
  width: "500px",
  borderRadius: "8px"
};
