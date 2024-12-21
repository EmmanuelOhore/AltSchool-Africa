import PropTypes from "prop-types";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const CustomPagination = ({ Listitem, currentPage, Pagesize, setpages }) => {
  // Handler for page change
  const handlePageChange = (page) => {
    setpages((prev) => ({ ...prev, currentPage: page }));
  };
  return (
    <Pagination
      current={currentPage}
      total={Listitem.length}
      pageSize={Pagesize}
      onChange={handlePageChange}
      showLessItems
      itemRender={(current, type, originalElement) => {
        if (type === "prev") {
          return (
            <button className="parginatedbtn back">
              <i className="fa-solid fa-angles-left"></i>
            </button>
          );
        }
        if (type === "next") {
          return (
            <button className="parginatedbtn next">
              <i className="fa-solid fa-angles-right"></i>
            </button>
          );
        }
        if (type === "page") {
          return <button className="parginatedbtn cur">{current}</button>;
        }
        return originalElement;
      }}
    />
  );
};

CustomPagination.propTypes = {
  Listitem: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  Pagesize: PropTypes.number.isRequired,
  setpages: PropTypes.func.isRequired,
};
export default CustomPagination;
