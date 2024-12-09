import { range } from "./utils";
import PropTypes from "prop-types";
import "./grid.css";

function Grid({ numRows, numCols }) {
  let totalCells = numRows * numCols;
  const griDstyle = {
    gridTemplateColumns: `repeat(${numCols}, 30px)`,
    gridTemplateRows: `repeat(${numRows}, 30px)`,
    gap: "1rem",
  };
  return (
    <>
      <div className="grid" style={griDstyle}>
        {range(totalCells).map((el) => {
          return (
            <div key={el} className="cells">
              {" "}
            </div>
          );
        })}
      </div>
    </>
  );
}

Grid.propTypes = {
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
};
export default Grid;
