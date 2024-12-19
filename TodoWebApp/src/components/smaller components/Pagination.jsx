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
