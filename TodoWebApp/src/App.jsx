import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/MenuBaar";
import Calendar from "./components/calendarComponent";
import StickyWall from "./components/stickynotesComponents/StickyNotesComponent";
import MainTodo from "./components/MainTodoComponent";
import Workpage from "./components/listComponents/work";
import Personalpage from "./components/listComponents/personalPage";
import SchoolPage from "./components/listComponents/schoolPage";
import Notfound from "./components/notfound";
import SignIn from "./components/signinpage";
import Settlings from "./components/settlings";
import "./App.css";
import { useContext } from "react";
import { TodoContext } from "./utlis/todoContext";

function App() {
  const { show } = useContext(TodoContext);

  return (
    <Routes>
      {/* SignIn Route */}
      <Route path="/" element={<SignIn />} />

      {/* Main App Routes */}
      <Route
        path="/app/*"
        element={
          <main
            className={
              show ? "container-content contentdisplay" : "container-content"
            }
          >
            {/* Sidebar Menu */}
            <section
              className={show ? "Menu-section hidden-menu" : "Menu-section"}
            >
              <Menu />
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
                  <Route path="/" element={<MainTodo />} />
                  <Route path="calendar" element={<Calendar />} />
                  <Route path="stickyNotes" element={<StickyWall />} />
                  <Route path="work" element={<Workpage />} />
                  <Route path="school" element={<SchoolPage />} />
                  <Route path="personal" element={<Personalpage />} />
                  <Route path="settings" element={<Settlings />} />
                  <Route path="*" element={<Navigate to="/not-found" />} />
                </Routes>
              </section>
            </section>
          </main>
        }
      />
      <Route path="/not-found" element={<Notfound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
}

export default App;
