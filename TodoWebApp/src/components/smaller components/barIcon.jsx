import { useContext } from "react";
import { TodoContext } from "../../utlis/todoContext";

const BarIcon = () => {
  const { show, handleshowsidebar } = useContext(TodoContext);
  return (
    <i
      onClick={handleshowsidebar}
      className={show ? "fa-solid fa-bars mainbars" : "fa-solid fa-bars"}
    ></i>
  );
};

export default BarIcon;
