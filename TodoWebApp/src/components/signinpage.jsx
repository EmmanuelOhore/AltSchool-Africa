import { useNavigate } from "react-router-dom";
import background from "../assets/img-section.png";
import "../styles/signin.css";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/app");
  };

  return (
    <div className="signin-overlay">
      <div className="signin-container">
        <section className="img-sontainer"></section>

        <section className="getStarted-container">
          <div className="started-wrapper">
            <h1>Productive Mind</h1>
            <p>
              With only the features you need, Organic Mind is customized for
              individuals seeking a stress-free way to stay focused on their
              goals, projects, and tasks.
            </p>
            <button onClick={handleSignIn} className="signin-button">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignIn;
