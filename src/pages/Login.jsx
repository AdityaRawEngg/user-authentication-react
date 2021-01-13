import { Component } from "react";
import Cookies from "js-cookies";
import styles from "../styles/login.module.css";
import { BASE_URL } from "../contants/url";

class Login extends Component {
  state = {
    alertMessage: "",
  };
  // Validation for the input field
  validation = (email, password) => {
    if (email === "") {
      this.setState({ alertMessage: "Email cannot be Empty" });
      setTimeout(() => {
        this.setState({ alertMessage: "" });
      }, 3000);
      return false;
    }
    if (password === "") {
      this.setState({ alertMessage: "Password cannot be Empty" });
      setTimeout(() => {
        this.setState({ alertMessage: "" });
      }, 3000);
      return false;
    }
    return true;
  };
  // When login from is submited
  login = (event) => {
    event.preventDefault();
    if (
      !this.validation(
        event.target.email.value.trim(),
        event.target.password.value.trim()
      )
    ) {
      return false;
    }

    const postData = {
      email: event.target.email.value.trim(),
      password: event.target.password.value.trim(),
    };

    fetch(`${BASE_URL}/users/login`, {
      method: "post",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ ...postData }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === "Unsuccessful") {
          this.setState({ alertMessage: data.message });
          setTimeout(() => {
            this.setState({ alertMessage: "" });
          }, 3000);
          return false;
        }
        Cookies.setItem("jwt", data.data[0]["jwt"]);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error", err);
        return err;
      });
  };

  signUp = () => {
    this.props.history.push("/signup");
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <p className={styles["alert"]}>{this.state.alertMessage}</p>
        <form onSubmit={this.login}>
          <div className={styles["input-field"]}>
            <label htmlFor="email">
              Email<span style={{ color: "red" }}>*</span> :{" "}
            </label>
            <input type="email" name="email" id="email" />
          </div>
          <div className={styles["input-field"]}>
            <label htmlFor="password">
              Password<span style={{ color: "red" }}>*</span> :{" "}
            </label>
            <input type="password" name="password" id="password" />
          </div>
          <div className={styles["form-button"]}>
            <button className={styles["submit"]}>Login</button>
            <button className={styles["reset"]} type="reset">
              Reset
            </button>
          </div>

          <span>If not Registered</span>
          <button
            className={styles["signup"]}
            onClick={this.signUp}
            type="button"
          >
            SignUp
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
