import React, { useState, useEffect } from "react";

const EditModal = ({ task, onClose, onUpdate }) => {
  const [updatedTask, setUpdatedTask] = useState("");

  useEffect(() => {
    if (task) {
      setUpdatedTask(task.task);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...task, task: updatedTask });
  };

  const handleChange = (e) => {
    setUpdatedTask(e.target.value);
  };

  return (
    <div className="modalsss">
      <div className="modalsss-content p-3">
        {/* the update modal is displayed  */}
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter new task"
            value={updatedTask}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary mr-2">
            Update
          </button>
          <button onClick={onClose} className="btn btn-secondary">
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
