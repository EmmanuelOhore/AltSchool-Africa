import { useContext, useState } from "react";
import "../styles/Task.css";
import AddSubTask from "./smaller components/Addsubtask";
import PropTypes from "prop-types";
import axios from "axios";

import { TodoContext } from "../utlis/todoContext";

const Task = ({ currentTaskId, setCurrentTaskId }) => {
  // state declaration
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { todo, setTodo, handleTaskDisplay, addtodo, setaddTodo } =
    useContext(TodoContext);

  // funtion to handle the input value
  const handleinputChange = (e) => {
    setaddTodo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const openModal = (id) => {
    setCurrentTaskId(id);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // main content return
  const { title, description, list_type, due_date, subtasks } = addtodo;
  const resetForm = () => {
    setaddTodo({
      title: "",
      description: "",
      list_type: "Personal",
      due_date: "",
      subtasks: [],
    });
  };
  // function to handle submiission of  input values
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://todolistapp-production.up.railway.app/tasks/";
    const newTodo = {
      title: title,
      list_type: list_type,
      due_date: due_date,
      description: description,
      subtasks: subtasks || [],
      checked: false,
      display: false,
    };
    try {
      const response = await axios.post(url, newTodo);
      const createdTodo = { ...response.data, ...newTodo };
      console.log(response.data);
      setTodo((prev) => [createdTodo, ...prev]);
      resetForm();
      handleTaskDisplay();
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleSubTaskToggle = (taskId, subtaskIndex) => {
    setTodo((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          const updatedSubTask = task.subtasks.map((subel, index) => {
            if (index === subtaskIndex) {
              return { ...subel, completed: !subel.completed };
            }
            return subel;
          });
          return { ...task, subtasks: updatedSubTask };
        }
        return task;
      })
    );
  };

  const handledeletetodo = async (taskid) => {
    if (!taskid) {
      console.error("Task ID is undefined");
      return;
    }

    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await axios.delete(
          `https://todolistapp-production.up.railway.app/tasks/${taskid}`
        );

        const newDeletedTodo = todo.filter((task) => task.id !== taskid);
        setTodo(newDeletedTodo);
        handleTaskDisplay();
      } catch (error) {
        console.error("Error deleting task:", error.response || error.message);
      }
    }
  };

  return (
    <article className="task">
      {/* Task Header */}
      <header className="task-header">
        <h2 className="task-title">Task:</h2>
        <button
          onClick={handleTaskDisplay}
          className="task-close-btn"
          aria-label="Close Task"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </header>

      {/* Task Input Section */}
      <form id="taskForm" onSubmit={handleSubmit} className="task-form">
        <section className="task-input-group">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => handleinputChange(e)}
            className="task-input"
            placeholder="Research Content Ideas"
            required
          />
          <textarea
            name="description"
            value={description}
            onChange={(e) => handleinputChange(e)}
            className="task-textarea"
            rows="5"
            cols="40"
            placeholder="Description"
          ></textarea>
        </section>

        {/* Task Details */}
        <section className="task-details">
          <div className="task-detail">
            <label htmlFor="task-list" className="task-label">
              List
            </label>
            <select
              id="list_type"
              name="list_type"
              value={list_type}
              onChange={(e) => handleinputChange(e)}
              className="task-select"
            >
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="School">School</option>
            </select>
          </div>
          <div className="task-detail">
            <label htmlFor="task-date" className="task-label">
              Due Date
            </label>
            <input
              type="date"
              id="task-date"
              value={due_date}
              name="due_date"
              onChange={(e) => handleinputChange(e)}
              className="task-select"
            />
          </div>
        </section>
      </form>

      {/* Subtask Section */}
      <section className="task-subtasks">
        <h2 className="task-title">Subtask:</h2>
        <button
          className="task-add-subtask-btn"
          disabled={
            currentTaskId &&
            todo.find((task) => task.id === currentTaskId)?.subtasks?.length >=
              4
          }
          onClick={() => openModal(currentTaskId)}
        >
          <i className="fa-solid fa-plus"></i> Add New SubTask
        </button>
        <ul className="task-subtask-list">
          {(currentTaskId
            ? todo.find((task) => task.id === currentTaskId)?.subtasks
            : addtodo.subtasks
          )?.map((subel, index) => (
            <li key={subel.id || index} className="task-subtask">
              {subel.title === "" ? null : (
                <>
                  <input
                    type="checkbox"
                    id={`subtask-${index}`}
                    checked={subel.completed}
                    onChange={() => handleSubTaskToggle(currentTaskId, index)}
                  />
                  <label
                    htmlFor={`subtask-${index}`}
                    className={
                      subel.completed
                        ? "task-subtask-label strike"
                        : "task-subtask-label"
                    }
                  >
                    {subel.title}
                  </label>
                </>
              )}
            </li>
          ))}
        </ul>
        <AddSubTask
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          taskId={currentTaskId}
        />
      </section>

      {/* Button Section */}
      <section className="task-actions">
        <button
          className="task-btn task-btn--delete"
          onClick={() => handledeletetodo(currentTaskId)}
          type="button"
        >
          Delete Task
        </button>
        <button
          className="task-btn task-btn--save"
          form="taskForm"
          type="submit"
        >
          Save Changes
        </button>
      </section>
    </article>
  );
};

Task.propTypes = {
  currentTaskId: PropTypes.string,
  setCurrentTaskId: PropTypes.func.isRequired,
};
export default Task;
