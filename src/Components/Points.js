import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removetask, updatetask } from "../redux/todoapp/actions";

import EditModal from "./Editmodal";

const Points = () => {
  const tasks = useSelector((state) => state.operations);
  const dispatch = useDispatch();

  // State to control the visibility of the EditModal
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // for local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      dispatch({ type: "LOAD_TASKS", payload: storedTasks });
    }
  }, [dispatch]);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleEditClick = (task) => {
    setSelectedTask(task);
    setShowEditModal(true);
  };
  // for closing the update modal
  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedTask(null);
  };

  const handleUpdateTask = (updatedTask) => {
    dispatch(updatetask(updatedTask));
    setShowEditModal(false);
    setSelectedTask(null);
  };

  return (
    <div className="container">
      {tasks.map((task) => (
        // taska are displayed here in a list
        <div
          key={task.id}
          className="task-box d-flex justify-content-between align-items-center my-3 p-3 border"
        >
          <div className="content d-flex align-items-center">
            <input type="checkbox" defaultChecked={task.completed} />
            <p className="task-text ml-3 mb-0">{task.task}</p>
          </div>
          <div className="actions-box d-flex align-items-center">
            <i
              className="fa-solid fa-trash mr-3"
              onClick={() => dispatch(removetask(task.id))}
            ></i>
            <i
              className="fa-solid fa-pen-to-square"
              onClick={() => handleEditClick(task)}
            ></i>
          </div>
        </div>
      ))}
      {/* edit modal is openede over  */}
      {showEditModal && (
        <EditModal
          task={selectedTask}
          onClose={handleCloseModal}
          onUpdate={handleUpdateTask}
        />
      )}
    </div>
  );
};

export default Points;
