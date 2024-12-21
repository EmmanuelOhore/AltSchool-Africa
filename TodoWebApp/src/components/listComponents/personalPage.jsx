import { useContext, useState, useEffect } from "react";
import ListTodoDisplay from "../smaller components/ListsectionTodoListDisplay";
import Search from "../smaller components/searchComponent";
import CustomPagination from "../smaller components/Pagination";
import BarIcon from "../smaller components/barIcon";
import ListDisplayHeader from "../smaller components/listdisplayheader";
import { TodoContext } from "../../utlis/todoContext";
import { Parginate } from "../../utlis/paginate";

const Personalpage = () => {
  const { personaltodo } = useContext(TodoContext);
  const [page, setpage] = useState({
    currentPage: 1,
    Pagesize: 6,
  });
  const [filteredTodos, setFilteredTodos] = useState(personaltodo);
  const [searchTerm, setSearchTerm] = useState("");
  const [curOpen, setCurOpen] = useState(null);
  useEffect(() => {
    setFilteredTodos(personaltodo);
  }, [personaltodo]);
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredTodos(personaltodo);
    } else {
      const filtered = personaltodo.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  }, [searchTerm, personaltodo]);
  const { currentPage, Pagesize } = page;
  const parginatedlist = Parginate(filteredTodos, currentPage, Pagesize);
  return (
    <>
      <section className="work-page-container">
        <div className="baricon">
          <BarIcon />
        </div>
        <ListDisplayHeader title={"Personal"} number={personaltodo.length} />
        <div className="search-container">
          <Search setSearchTerm={setSearchTerm} />
        </div>
        <ListTodoDisplay
          TodoList={parginatedlist}
          setFilteredTodos={setFilteredTodos}
          setCurOpen={setCurOpen}
          curOpen={curOpen}
        />
        <div className="paginate ">
          <CustomPagination
            className="paginate"
            Listitem={filteredTodos}
            currentPage={currentPage}
            Pagesize={Pagesize}
            setpages={setpage}
          />
        </div>
      </section>
    </>
  );
};

export default Personalpage;
