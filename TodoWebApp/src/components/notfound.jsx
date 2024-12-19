import { Link } from "react-router-dom";
const Notfound = () => {
  // yes i did it , too tired to seprate the styles into a diffrent file. well it works ! so if it aint broke i aint fixing it
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      backgroundColor: "#f8f9fa",
      color: "#343a40",
    },
    heading: {
      fontSize: "4rem",
      marginBottom: "1rem",
    },
    paragraph: {
      fontSize: "1.25rem",
      marginBottom: "2rem",
    },
    button: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      color: "black",
      backgroundColor: " var(--yellow)",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      textDecoration: "none",
    },
    buttonHover: {
      backgroundColor: " hsl(47, 100%, 43%)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.paragraph}>
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to="/"
        style={styles.button}
        onMouseOver={(e) =>
          (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
        }
        onMouseOut={(e) =>
          (e.target.style.backgroundColor = styles.button.backgroundColor)
        }
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Notfound;
