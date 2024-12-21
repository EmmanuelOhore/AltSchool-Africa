import { Link } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import { TodoContext } from "../utlis/todoContext";
import Search from "./smaller components/mainsearchinput";
import "../styles/MenuBar.css";
const Menu = () => {
  // state declaration
  const { todo, personaltodo, worktodo, schooltodo, handleshowsidebar } =
    useContext(TodoContext);

  return (
    <aside className={"menu-container"}>
      {/* Menu head section */}
      <header className="menu-header">
        <div className="menu-title">
          <h2>Menu</h2>
          <i onClick={handleshowsidebar} className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="menu-search">
          <Search />
        </div>
      </header>

      {/* Task section */}
      <section className="task-section">
        <h3 className="section-title">Tasks</h3>
        <ul className="task-list-container">
          <Link onClick={handleshowsidebar} to="/app/">
            <li className="task-list-item">
              <div className="task-icon-content">
                <i className="fa-solid fa-list"></i>
                <h4 className="hide">Today</h4>
              </div>

              <p className="task-count hide">{todo.length}</p>
            </li>
          </Link>
          <Link onClick={handleshowsidebar} to="/app/calendar">
            <li className="task-list-item">
              <div className="task-icon-content">
                <i className="fa-solid fa-calendar-days"></i>

                <h4 className="hide">Calendar</h4>
              </div>
            </li>
          </Link>
          <Link onClick={handleshowsidebar} to="/app/stickyNotes">
            <li className="task-list-item">
              <div className="task-icon-content">
                <i className="fa-solid fa-note-sticky"></i>
                <h4 className="hide">Sticky Notes</h4>
              </div>
            </li>
          </Link>
        </ul>
      </section>

      {/* List section */}
      <section className="list-section">
        <h3 className="section-title">Lists</h3>
        <ul className="list-content-container">
          <Link onClick={handleshowsidebar} to="/app/personal">
            <li className="list-item">
              <div className="list-icon-content">
                <div className="list-box personal"></div>
                <h4 className="hide">Personal</h4>
              </div>
              <p className="list-count hide">{personaltodo.length}</p>
            </li>
          </Link>
          <Link onClick={handleshowsidebar} to="/app/work">
            <li className="list-item">
              <div className="list-icon-content">
                <div className="list-box work"></div>
                <h4 className="hide">Work</h4>
              </div>
              <p className="list-count hide">{worktodo.length}</p>
            </li>
          </Link>
          <Link onClick={handleshowsidebar} to="/app/school">
            <li className="list-item">
              <div className="list-icon-content">
                <div className="list-box school"></div>
                <h4 className="hide"> School</h4>
              </div>
              <p className="list-count hide">{schooltodo.length}</p>
            </li>
          </Link>
        </ul>
      </section>

      {/* Options section */}
      <section className="menu-options">
        <Link to="/not-found">
          <div className="option logout">
            <i className="fa-solid fa-ban"></i>
            <h4>404 Error</h4>
          </div>
        </Link>
        <Link onClick={handleshowsidebar} to="/app/settings">
          <div className="option settings">
            <i className="fa-solid fa-sliders"></i>
            <h4>Settings</h4>
          </div>
        </Link>
        <Link to="/">
          <div className="option logout">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <h4>Sign-out</h4>
          </div>
        </Link>
      </section>
    </aside>
  );
};

Menu.propTypes = {
  handleshowsidebar: PropTypes.func.isRequired,
};
export default Menu;
