import { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ setSearchTerm }) => {
  const [search, setSearch] = useState("");

  const handlesearch = (e) => {
    const searchedValue = e.target.value;
    setSearch(searchedValue);
    setSearchTerm(searchedValue);
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
Search.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};
export default Search;
