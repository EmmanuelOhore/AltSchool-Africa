import { Routes, Route } from "react-router-dom";
import Menu from "./components/MenuBaar";
import Calendar from "./components/calendarComponent";
import StickyWall from "./components/stickynotesComponents/StickyNotesComponent";
import MainTodo from "./components/MainTodoComponent";
import Workpage from "./components/listComponents/work";
import Personalpage from "./components/listComponents/personalPage";
import SchoolPage from "./components//listComponents/schoolPage";
import "./App.css";
import { useState } from "react";

function App() {
  const [show, setshow] = useState(false);

  const handleshowsidebar = () => {
    setshow((prev) => !prev);
  };
  return (
    <main className={"container-content"}>
      {/* Sidebar Menu */}
      <section className={show ? "Menu-section hidden-menu" : "Menu-section"}>
        <Menu show={show} handleshow={handleshowsidebar} />
      </section>

      {/* Main Section */}
      <section
        className={
          !show
            ? "todo-content-section hidden-todo-content-section"
            : "todo-content-section"
        }
      >
        <section className="main-todo-section">
          <Routes>
            <Route
              path="/"
              element={<MainTodo show={show} handleshow={handleshowsidebar} />}
            />
            <Route
              path="/calendar"
              element={<Calendar show={show} handleshow={handleshowsidebar} />}
            />
            <Route
              path="/stickyNotes"
              element={
                <StickyWall show={show} handleshow={handleshowsidebar} />
              }
            />
            <Route
              path="/work"
              element={<Workpage show={show} handleshow={handleshowsidebar} />}
            />
            <Route
              path="/school"
              element={
                <SchoolPage show={show} handleshow={handleshowsidebar} />
              }
            />
            <Route
              path="/personal"
              element={
                <Personalpage show={show} handleshow={handleshowsidebar} />
              }
            />
          </Routes>
        </section>
      </section>
    </main>
  );
}

export default App;
