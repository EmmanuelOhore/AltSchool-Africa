import { useContext, useState } from "react";
import { TodoContext } from "../../utlis/todoContext";
import PropTypes from "prop-types";
import "rc-dialog/assets/index.css";
import Dialog from "rc-dialog";

const AddSubTask = ({ closeModal, isModalOpen, taskId }) => {
  const { setTodo, setaddTodo } = useContext(TodoContext);
  const [subtitle, setsubTitle] = useState("");
  const handlesave = () => {
    if (taskId) {
      // Update existing tasks in the 'todo' state
      setTodo((prev) => {
        return prev.map((task) => {
          if (task.id === taskId) {
            return {
              ...task,
              subTask: [...task.subTask, { title: subtitle, completed: false }],
            };
          }
          return task;
        });
      });
    } else {
      // Update the 'addtodo' state for new tasks
      setaddTodo((prev) => ({
        ...prev,
        subTask: [
          ...(prev.subTask || []),
          { title: subtitle, completed: false },
        ],
      }));
    }

    setsubTitle(""); // Clear the input
    closeModal(); // Close the modal
  };

  const handleInputChange = (e) => {
    setsubTitle(e.target.value);
  };
  return (
    <>
      <Dialog
        title="Add Sticky Note"
        visible={isModalOpen}
        onClose={closeModal}
        footer={[
          <button
            onClick={handlesave}
            className="sticky-btn sticky-save"
            key="save"
          >
            Save
          </button>,
          <button
            onClick={closeModal}
            className="sticky-btn sticky-cancel"
            key="cancel"
          >
            Cancel
          </button>,
        ]}
      >
        <div className="modal-body">
          <input
            className="sticky-input sticky-title"
            type="text"
            name="Title"
            value={subtitle}
            onChange={handleInputChange}
            placeholder="Title"
            required
          />
        </div>
      </Dialog>
    </>
  );
};
AddSubTask.propTypes = {
  closeModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  taskId: PropTypes.string,
};

export default AddSubTask;
