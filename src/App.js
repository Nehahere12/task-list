import React from "react";
import Header from "./Components/Header";
import Points from "./Components/Points";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { deletetask } from "./redux/todoapp/actions";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.operations);

  return (
    <div className="wrapper bg-success  ">
      <br /> <br />
      <h1 className="text-center text-white">To-do app</h1>
      <Header />
      <Points />
      {tasks.length > 1 && (
        <button
          className="btn btn-danger btn-md delete-all  "
          onClick={() => dispatch(deletetask())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
};

export default App;
