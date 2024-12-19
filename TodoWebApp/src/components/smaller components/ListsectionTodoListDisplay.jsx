import PropTypes from "prop-types";
import SpecificTodoListContent from "./specificTodolistcontent";

const ListTodoDisplay = ({ TodoList, curOpen, setCurOpen }) => {
  // funtion to handle the display
  const handleDisplay = (index) => {
    setCurOpen((prevOpen) => (prevOpen === index ? null : index));
  };
  return (
    <>
      <section className="todo-content-container">
        <ul className="todo-content">
          {/* todo list */}
          {TodoList.map((el, index) => {
            return (
              <SpecificTodoListContent
                key={index}
                handleDisplay={handleDisplay}
                todoEl={{ ...el, display: curOpen === index }}
                index={index}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};
ListTodoDisplay.propTypes = {
  TodoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool,
      display: PropTypes.bool,
    })
  ).isRequired,
  curOpen: PropTypes.number,
  setCurOpen: PropTypes.func.isRequired,
};

export default ListTodoDisplay;
