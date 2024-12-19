import { useState, useContext } from "react";
import { TodoContext } from "../../utlis/todoContext";

const Search = () => {
  const { setSearchTerm } = useContext(TodoContext);
  const [search, setSearch] = useState("");

  const handlesearch = (e) => {
    const searchedValue = e.target.value;
    setSearch(searchedValue);
    setSearchTerm(searchedValue); // Update context state
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search todos..."
        className="search-todo"
        value={search}
        onChange={handlesearch}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          marginBottom: "20px",
        }}
      />
    </>
  );
};

export default Search;
