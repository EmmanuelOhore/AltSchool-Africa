import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";
import { TodoContext } from "./todoContext";

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState(() => {
    const savedtodo = localStorage.getItem("savedtodo");
    return savedtodo ? JSON.parse(savedtodo) : [];
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://todolistapp-production.up.railway.app/tasks/"
      );
      setTodo(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem("savedtodo", JSON.stringify(todo));
    }
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
    subtasks: [],
  });
  const [personaltodo, setPersonalTodo] = useState([]);
  const [worktodo, setWorkTodo] = useState([]);
  const [schooltodo, setSchoolTodo] = useState([]);

  useEffect(() => {
    if (!Array.isArray(todo)) return;
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
