import { Component } from "react";
import styles from "../styles/signup.module.css";
import { BASE_URL } from "../contants/url";

class SignUp extends Component {
  state = {
    alertMessage: "",
  };
  // Validation for the input field
  validation = (email, password, cpassword) => {
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
    if (cpassword === "") {
      this.setState({ alertMessage: "Confirm Password cannot be Empty" });
      setTimeout(() => {
        this.setState({ alertMessage: "" });
      }, 3000);
      return false;
    }
    if (password !== cpassword) {
      this.setState({
        alertMessage: "Password and Confirm Password Do not Match",
      });
      setTimeout(() => {
        this.setState({ alertMessage: "" });
      }, 3000);
      return false;
    }
    return true;
  };
  // On Sign Up
  signUp = (event) => {
    event.preventDefault();
    if (
      !this.validation(
        event.target.email.value.trim(),
        event.target.password.value.trim(),
        event.target.cpassword.value.trim()
      )
    ) {
      return false;
    }

    const postData = {
      email: event.target.email.value.trim(),
      password: event.target.password.value.trim(),
      cpassword: event.target.cpassword.value.trim(),
    };
    fetch(`${BASE_URL}/users/signin`, {
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
        this.setState({ alertMessage: data.status });
        setTimeout(() => {
          this.setState({ alertMessage: "" });
          this.props.history.push("/login");
        }, 3000);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <p className={styles["alert"]}>{this.state.alertMessage}</p>
        <form onSubmit={this.signUp}>
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
          <div className={styles["input-field"]}>
            <label htmlFor="cpassword">
              Confirm-Password<span style={{ color: "red" }}>*</span> :{" "}
            </label>
            <input type="password" name="cpassword" id="cpassword" />
          </div>
          <div className={styles["form-button"]}>
            <button className={styles["submit"]}>Register</button>
            <button className={styles["reset"]} type="reset">
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
