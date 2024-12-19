import "../styles/set.css";
import BarIcon from "./smaller components/barIcon";
const Settlings = () => {
  return (
    <>
      <BarIcon />
      <div className="settings-container">
        <h1 className="settings-title">Settings Page</h1>
        <div className="meme-section">
          <div className="lazycontainer">
            {/* <img src={lazy} alt="Laziness meme" className="meme-image" /> */}
          </div>
          <h2 className="coming-soon-text">Coming Soon...</h2>
          <p className="meme-caption">
            No time to code this out. Catch you later! 😴
          </p>
        </div>
      </div>
    </>
  );
};

export default Settlings;
