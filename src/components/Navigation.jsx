import { Link, withRouter } from "react-router-dom";
import styles from "../styles/navigation.module.css";
import Cookies from "js-cookies";
function Navigation(props) {
  const logout = () => {
    Cookies.removeItem("jwt");
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
        <button className={styles["logout-btn"]}>Login</button>
      ) : props.location.pathname === "/login" ? (
        <button className={styles["logout-btn"]}>Signin</button>
      ) : (
        <button className={styles["logout-btn"]}>Logout</button>
      )}
    </nav>
  );
}
export default withRouter(Navigation);
