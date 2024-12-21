import PropTypes from "prop-types";
import { TodoContext } from "../../utlis/todoContext";
import { useContext } from "react";

const SpecificTodoListContent = ({ todoEl, index, handleDisplay }) => {
  const { handleTaskDisplay, setaddTodo } = useContext(TodoContext);

  // handles the background color of the list types
  const handlebgcolor = () => {
    if (todoEl.list_type === "Personal") {
      return { backgroundColor: "#ff6b6b" };
    } else if (todoEl.list_type === "Work") {
      return { backgroundColor: "#66d9e8" };
    } else if (todoEl.list_type === "School") {
      return { backgroundColor: "#ffd43b" };
    }
  };

  // handles the the display of the specific task
  const handleTaskSpecificDetials = () => {
    handleTaskDisplay();
    setaddTodo({
      title: todoEl.title,
      list_type: todoEl.list_type,
      due_date: todoEl.due_date,
      description: todoEl.description,
    });
  };

  // handles the drop down menu of the  todo
  const handleIconClick = (e) => {
    e.stopPropagation();
    handleDisplay(index);
  };

  return (
    <li onClick={handleTaskSpecificDetials} className="todo">
      <div className="todo-detail-wrapper">
        <div className="todo-check">
          <h3>{todoEl.title}</h3>
        </div>
        <i
          onClick={handleIconClick}
          className={
            todoEl.display
              ? "fa-solid fa-chevron-down"
              : "fa-solid fa-angle-right"
          }
        ></i>
      </div>
      {/* todo task detrails */}
      {todoEl.display && (
        <>
          <div className="todo-task-details">
            <div className="Task-description-container">
              <p className="task-decription"> {todoEl.description} </p>
            </div>
            <div className="task-detaiils-todo-container">
              <div className="task-date">
                <i className="fa-regular fa-calendar-days"></i>
                <time>{todoEl.due_date}</time>
              </div>
              <div className="Subtask-details">
                <p> {todoEl.subtasks?.length}</p>
                <h4>Subtasks</h4>
              </div>
              <div className="tag-details">
                <div style={handlebgcolor()} className="tag"></div>
                <p>{todoEl.list_type}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </li>
  );
};
SpecificTodoListContent.propTypes = {
  todoEl: PropTypes.shape({
    title: PropTypes.string.isRequired,
    display: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    list_type: PropTypes.string.isRequired,
    subtasks: PropTypes.array,
    due_date: PropTypes.string.isRequired,
  }).isRequired,
  handleDisplay: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SpecificTodoListContent;
