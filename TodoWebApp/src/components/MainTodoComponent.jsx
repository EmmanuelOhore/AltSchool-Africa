import "../styles/MainTodo.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { Parginate } from "../utlis/paginate";
import { TodoContext } from "../utlis/todoContext";
import Task from "./TaskComponent";
import CustomPagination from "./smaller components/Pagination";
import BarIcon from "./smaller components/barIcon";
import TodoListContent from "./smaller components/TodolistContent";

const MainTodo = () => {
  // state declaration
  const [curOpen, setCurOpen] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [currentTaskId, setCurrentTaskId] = useState(null);
  const { todo, setaddTodo, searchTerm, showTask, setShowTask, page, setpage } =
    useContext(TodoContext);
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error("Simulated error in render tree");
  }

  // funtion handling the task display
  const handleTaskDisplay = () => {
    setShowTask((prev) => !prev);
    setaddTodo({
      id: uuidv4(),
      title: "",
      list_type: "Personal",
      due_date: "Today",
      description: "",
      checked: false,
      subTask: [],
    });
    setCurrentTaskId(null);
    setEditingIndex(null);
  };
  // funtion to handle the display
  const handleDisplay = (index) => {
    const selectedTask = todo[index];
    const isSameTask = curOpen === index;
    setCurOpen(isSameTask ? null : index);
    setEditingIndex(isSameTask ? null : index);
    setCurrentTaskId(selectedTask.id);
  };
  // Filter todos based on the search term
  const filteredTodos = todo.filter((el) =>
    el.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const { currentPage, Pagesize } = page;
  // Paginated todo list
  const newTodo = Parginate(filteredTodos, currentPage, Pagesize);

  // main content return
  return (
    <>
      {/* main todo section */}
      <main
        className={`maincomponent-container ${showTask ? "show-task" : ""}`}
      >
        <section className="mainsection">
          <BarIcon />
          <article className="mainTodo-container">
            <header className="todoHeader">
              <h1>Today</h1>
              <h2>{todo.length}</h2>
            </header>
            {/* todo content container  */}
            <section className="todo-content-container">
              <button className="addTodo" onClick={handleTaskDisplay}>
                <i className="fa-solid fa-plus"></i>
                Add New Task
              </button>
              <ul className="todo-content">
                {/* todo list */}
                {newTodo.map((el, index) => {
                  return (
                    <TodoListContent
                      key={el.id}
                      handleDisplay={handleDisplay}
                      todoEl={{ ...el, display: curOpen === index }}
                      index={index}
                      editingIndex={editingIndex}
                      setEditingIndex={setEditingIndex}
                      setCurrentTaskId={setCurrentTaskId}
                      currentTaskId={currentTaskId}
                      setCurOpen={setCurOpen}
                    />
                  );
                })}
              </ul>
              <div className="paginate">
                <CustomPagination
                  className="paginate"
                  Listitem={filteredTodos}
                  currentPage={currentPage}
                  Pagesize={Pagesize}
                  setpages={setpage}
                />
                <i
                  onClick={() => setThrowError(true)}
                  className="fa-solid fa-triangle-exclamation error"
                ></i>
              </div>
            </section>
          </article>
        </section>
        <article className="Taskcomponent">
          {showTask && (
            <Task
              currentTaskId={currentTaskId}
              setCurrentTaskId={setCurrentTaskId}
            />
          )}
        </article>
      </main>
    </>
  );
};

MainTodo.propTypes = {
  handleshow: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
export default MainTodo;
