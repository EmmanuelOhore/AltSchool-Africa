//  shares styling with the maintodo section
import { useContext, useState, useEffect } from "react";
import Search from "../smaller components/searchComponent";
import ListTodoDisplay from "../smaller components/ListsectionTodoListDisplay";
import ListDisplayHeader from "../smaller components/listdisplayheader";
import { TodoContext } from "../../utlis/todoContext";
import BarIcon from "../smaller components/barIcon";
import CustomPagination from "../smaller components/Pagination";
import { Parginate } from "../../utlis/paginate";

const Workpage = () => {
  const { worktodo } = useContext(TodoContext);
  const [page, setpage] = useState({
    currentPage: 1,
    Pagesize: 6,
  });
  const [filteredTodos, setFilteredTodos] = useState(worktodo);
  const [searchTerm, setSearchTerm] = useState("");
  const [curOpen, setCurOpen] = useState(null);
  useEffect(() => {
    setFilteredTodos(worktodo);
  }, [worktodo]);
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredTodos(worktodo);
    } else {
      const filtered = worktodo.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  }, [searchTerm, worktodo]);
  const { currentPage, Pagesize } = page;
  const parginatedlist = Parginate(filteredTodos, currentPage, Pagesize);
  return (
    <>
      <section className="work-page-container">
        <BarIcon />

        <ListDisplayHeader title={"Work"} number={worktodo.length} />
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

export default Workpage;
