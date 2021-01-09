import { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookies";
import "../styles/home.module.css";

class Home extends Component {
  // Will hold state for current User
  // Will Make an api call to server
  // Check for the token from the Cookies
  state = {
    isAuthenticated: Cookies.getItem("jwt") ? true : false,
    blogData: {},
    some: "",
  };

  render() {
    return (
      <>
        {/* {this.state.isAuthenticated ? ( */}
        <div>
          <iframe
            src="https://team5-employee-details.netlify.app/"
            title="Iframe Example"
            scrolling="no"
          ></iframe>
        </div>
        {/* ) : ( */}
        {/* <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )} */}
        {/* Navigatin Bar with Login and signUp button */}
        {/* Footer */}
      </>
    );
  }
}

export default Home;
