import Stickynote from "./stickynote";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import Dialog from "rc-dialog";
import CustomPagination from "../smaller components/Pagination";
import BarIcon from "../smaller components/barIcon";
import "rc-dialog/assets/index.css";
import "../../styles/stickywall.css";
import { useEffect, useState } from "react";
import { Parginate } from "../../utlis/paginate";

const StickyWall = () => {
  const [page, setpage] = useState({
    currentPage: 1,
    Pagesize: 5,
  });
  const [stickyNotes, setSticyNotes] = useState(() => {
    const savedStickyNotes = localStorage.getItem("stickyNotes");
    const defaultData = [
      {
        id: uuidv4(),
        bgColor: "#fdf2b3",
        Title: "Social Media",
        taskOne: "Plan social content",
        taskTwo: "Build content calendar",
        taskThree: "Plan promotion and distribution",
      },
      {
        id: uuidv4(),
        bgColor: "#ffd4a9",
        Title: "Deep Cleaning",
        taskOne: "Plan social content",
        taskTwo: "Build content calendar",
        taskThree: "Plan promotion and distribution",
      },
    ];
    return savedStickyNotes ? JSON.parse(savedStickyNotes) : defaultData;
  });
  useEffect(() => {
    localStorage.setItem("stickyNotes", JSON.stringify(stickyNotes));
  }, [stickyNotes]);

  const { currentPage, Pagesize } = page;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addstickyNotes, setAddStickyNotes] = useState({
    bgColor: "#d1eaed",
    Title: "",
    taskOne: "",
    taskTwo: "",
    taskThree: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handlesave = () => {
    if (addstickyNotes.Title.trim() === "") {
      toast.error("Title is required!");
      return;
    }
    setSticyNotes((prev) => [...prev, addstickyNotes]);
    setAddStickyNotes({
      id: uuidv4(),
      bgColor: "#d1eaed",
      Title: "",
      taskOne: "",
      taskTwo: "",
      taskThree: "",
    });
    closeModal();
  };

  const handleinputChnage = (e) => {
    setAddStickyNotes((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handledelte = (id) => {
    const newstickynote = stickyNotes.filter((task) => task.id !== id);
    setSticyNotes(newstickynote);
  };
  const { Title, taskOne, taskThree, taskTwo, bgColor } = addstickyNotes;
  // parginated data
  const ParginatedStickyNotes = Parginate(stickyNotes, currentPage, Pagesize);
  return (
    <>
      <ToastContainer />
      <section className="sticky-wall">
        <BarIcon />

        <header className="sticky-wall-header">
          <h1>Sticky Wall</h1>
        </header>
        <div className="sticky-notes">
          {ParginatedStickyNotes.map((el) => (
            <Stickynote
              taskid={el.id}
              key={el.id}
              bgColor={el.bgColor}
              Title={el.Title}
              taskOne={el.taskOne}
              taskTwo={el.taskTwo}
              taskThree={el.taskThree}
              handledelte={handledelte}
            />
          ))}
          <div onClick={openModal} className="add-sticker">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="paginate ">
          <CustomPagination
            Listitem={stickyNotes}
            currentPage={currentPage}
            Pagesize={Pagesize}
            setpages={setpage}
          />
        </div>
      </section>

      {/* rc-dialog Modal */}
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
            value={Title}
            onChange={handleinputChnage}
            placeholder="Title"
            required
          />
          <input
            className="sticky-input sticky-one"
            type="text"
            name="taskOne"
            onChange={handleinputChnage}
            value={taskOne}
            required
            placeholder="Task One"
          />
          <input
            className="sticky-input sticky-two"
            type="text"
            onChange={handleinputChnage}
            value={taskTwo}
            name="taskTwo"
            placeholder="Task Two"
          />
          <input
            className="sticky-input sticky-three"
            type="text"
            name="taskThree"
            value={taskThree}
            onChange={handleinputChnage}
            placeholder="Task Three"
          />
          <input
            type="color"
            className="sticky-color"
            required
            onChange={handleinputChnage}
            value={bgColor}
            name="bgColor"
          />
        </div>
      </Dialog>
    </>
  );
};

export default StickyWall;
