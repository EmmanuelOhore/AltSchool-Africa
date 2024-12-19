import { useContext } from "react";
import { TodoContext } from "../../utlis/todoContext";
import TodoListContent from "./TodolistContent";

const TodolistDisplay = () => {
  const { todo, setTodo } = useContext(TodoContext);

  // funtion to handle the display
  const handleDisplay = (index) => {
    setTodo((prev) =>
      prev.map((el, i) => (i === index ? { ...el, display: !el.display } : el))
    );
  };
  return (
    <>
      <section className="todo-content-container">
        <button className="addTodo">
          <i className="fa-solid fa-plus"></i>
          Add New Task
        </button>
        <ul className="todo-content">
          {/* todo list */}
          {todo.map((el, index) => {
            return (
              <TodoListContent
                key={index}
                handleDisplay={handleDisplay}
                todoEl={el}
                index={index}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default TodolistDisplay;
