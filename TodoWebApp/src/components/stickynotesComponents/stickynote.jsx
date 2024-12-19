import PropTypes from "prop-types";
const Stickynote = ({
  bgColor,
  taskid,
  Title,
  taskOne,
  taskTwo,
  taskThree,
  handledelte,
}) => {
  return (
    <article style={{ backgroundColor: bgColor }} className="sticky-note">
      <h2 className="sticky-note-title">
        {Title}{" "}
        <i
          onClick={() => handledelte(taskid)}
          className="fa-solid fa-trash"
        ></i>
      </h2>
      <ul className="sticky-note-tasks">
        {taskOne === "" ? null : (
          <li className="sticky-note-task">{taskOne}</li>
        )}
        {taskTwo === "" ? null : (
          <li className="sticky-note-task">{taskTwo}</li>
        )}
        {taskThree === "" ? null : (
          <li className="sticky-note-task">{taskThree}</li>
        )}
      </ul>
    </article>
  );
};
Stickynote.propTypes = {
  bgColor: PropTypes.string,
  taskid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  Title: PropTypes.string.isRequired,
  taskOne: PropTypes.string,
  taskTwo: PropTypes.string,
  taskThree: PropTypes.string,
  handledelte: PropTypes.func.isRequired,
};
export default Stickynote;
