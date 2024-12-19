//  shares styling with the maintodo section
import ListTodoDisplay from "../smaller components/ListsectionTodoListDisplay";
import Search from "../smaller components/searchComponent";
import ListDisplayHeader from "../smaller components/listdisplayheader";
import CustomPagination from "../smaller components/Pagination";
import { Parginate } from "../../utlis/paginate";
import BarIcon from "../smaller components/barIcon";
import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../utlis/todoContext";

const SchoolPage = () => {
  const { schooltodo } = useContext(TodoContext);
  const [page, setpage] = useState({
    currentPage: 1,
    Pagesize: 6,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(schooltodo);
  const [curOpen, setCurOpen] = useState(null);
  useEffect(() => {
    setFilteredTodos(schooltodo);
  }, [schooltodo]);
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredTodos(schooltodo);
    } else {
      const filtered = schooltodo.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  }, [searchTerm, schooltodo]);
  const { currentPage, Pagesize } = page;
  const parginatedlist = Parginate(filteredTodos, currentPage, Pagesize);
  return (
    <>
      <section className="work-page-container">
        <BarIcon />

        <ListDisplayHeader title={"School"} number={schooltodo.length} />
        <div className="search-container">
          <Search setSearchTerm={setSearchTerm} />
        </div>
        <ListTodoDisplay
          setCurOpen={setCurOpen}
          curOpen={curOpen}
          TodoList={parginatedlist}
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

export default SchoolPage;
