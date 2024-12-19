import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { TodoContext } from "./todoContext";

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(() => {
    const savedtodo = localStorage.getItem("savedtodo");
    const defualttodo = [
      {
        id: 1,
        title: "Research content Ideas",
        list_type: "School",
        description:
          " Lorem ipsum dolor  exercitationem. Fuga corporis officia exercitationem ea possimus error eveniet sint totam commodi, soluta nam.",
        due_date: "2024-12-13",
        display: false,
        checked: false,
        subTask: [{ title: "Another subtask title", completed: true }],
      },
      {
        id: 2,
        title: "Print Business cards",
        list_type: "Work",
        description:
          " Lorem ipsum  aur quae corporis fugit id expedita nisi exercitationem. Fuga corporis officia exercitationem ea possimus error eveniet sint totam commodi, soluta nam.",

        due_date: "2024-12-12",
        display: false,
        checked: false,
        subTask: [
          { title: "Reach out to the great whale", completed: false },
          { title: "Reach out to the great whale", completed: true },
        ],
      },
      {
        id: 3,
        title: "Creat a database of guest",
        list_type: "Personal",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur quae corporis fugit id expedita nisi exercitationem. Fuga corporis officia exercitationem ea possimus error eveniet sint totam commodi, soluta nam.",

        due_date: "2024-12-03",
        display: false,
        checked: false,
        subTask: [{ title: "Take a leap of fate", completed: false }],
      },
    ];
    return savedtodo ? JSON.parse(savedtodo) : defualttodo;
  });
  useEffect(() => {
    localStorage.setItem("savedtodo", JSON.stringify(todo));
  }, [todo]);

  const [page, setpage] = useState({
    currentPage: 1,
    Pagesize: 6,
  });
  const [showTask, setShowTask] = useState(true);
  const handleTaskDisplay = () => {
    setShowTask((prev) => !prev);
  };
  const [addtodo, setaddTodo] = useState({
    title: "",
    description: "",
    list_type: "Personal",
    due_date: "Today",
    subTask: [{ title: "" }],
  });
  const [personaltodo, setPersonalTodo] = useState([]);
  const [worktodo, setWorkTodo] = useState([]);
  const [schooltodo, setSchoolTodo] = useState([]);

  useEffect(() => {
    // filterepersonaltodo
    const filtredPersonalTodo = todo.filter(
      (el) => el.list_type === "Personal"
    );
    setPersonalTodo(filtredPersonalTodo);
    // filterework todo
    const filtredWorkTodo = todo.filter((el) => el.list_type === "Work");
    setWorkTodo(filtredWorkTodo);
    // filtereschool todo
    const filtredSchoolTodo = todo.filter((el) => el.list_type === "School");
    setSchoolTodo(filtredSchoolTodo);
  }, [todo]);

  // search functionaloty:

  const [searchTerm, setSearchTerm] = useState("");
  const [show, setshow] = useState(false);

  const handleshowsidebar = () => {
    setshow((prev) => !prev);
  };
  return (
    <>
      <TodoContext.Provider
        value={{
          todo,
          show,
          handleshowsidebar,
          searchTerm,
          setSearchTerm,
          addtodo,
          personaltodo,
          setPersonalTodo,
          schooltodo,
          worktodo,
          setaddTodo,
          setTodo,
          showTask,
          setShowTask,
          page,
          setpage,
          handleTaskDisplay,
        }}
      >
        {children}
      </TodoContext.Provider>{" "}
    </>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default TodoProvider;
