import { Link, withRouter } from "react-router-dom";
import styles from "../styles/navigation.module.css";
import Cookies from "js-cookies";
function Navigation(props) {
  const logout = () => {
    Cookies.removeItem("jwt");
    props.history.push("/login");
  };
  const signUp = () => {
    props.history.push("/signup");
  };
  const login = () => {
    props.history.push("/login");
  };

  return (
    <nav>
      <Link to={"/"}>
        <img
          src="https://webstockreview.net/images/team-icon-png-5.png"
          alt=" Team Logo"
        />
      </Link>
      {props.location.pathname === "/signup" ? (
        <button onClick={login} className={styles["logout-btn"]}>
          Login
        </button>
      ) : props.location.pathname === "/login" ? (
        <button onClick={signUp} className={styles["logout-btn"]}>
          Signup
        </button>
      ) : (
        <button onClick={logout} className={styles["logout-btn"]}>
          Logout
        </button>
      )}
    </nav>
  );
}
export default withRouter(Navigation);
