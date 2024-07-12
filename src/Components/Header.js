import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { addtask } from "../redux/todoapp/actions";

const Header = () => {
  const dispatch = useDispatch();
  const [todovalues, setTodovalues] = useState("");
  // it tells the happenings on clicking the add button
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let tasks = {
      id: time,
      task: todovalues,
      completed: false,
    };
    setTodovalues("");
    dispatch(addtask(tasks));
  };

  return (
    <>
      <form
        className="form-group custom-form margin-top"
        onSubmit={handleSubmit}
      >
        <label className="">Add new task here</label>

        {/* input and button */}

        <div className="input-group mb-3 inputs">
          <input
            type="text"
            className="form-control "
            required
            value={todovalues}
            onChange={(e) => setTodovalues(e.target.value)}
            placeholder="New task"
            aria-label="New task"
            aria-describedby="button-addon2"
          />
          <button className="btn btn-danger" type="submit" id="button-addon2">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Header;
