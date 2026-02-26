export default function DeleteTeacherModal({
  teacher,
  onClose,
  onConfirm
}) {
  if (!teacher) return null;

  return (
    <div className="modal-overlayD">

      <div className="modalD">

        <h3 className="modalD-title">
          Delete Teacher
        </h3>

        <p className="modalD-text">
          Are you sure you want to delete
          <b> {teacher.full_name}</b>?
          <br />
          This action cannot be undone.
        </p>

        <div className="modalD-actions">

          <button
            className="btn-cancelL"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="btn-deleteE"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}