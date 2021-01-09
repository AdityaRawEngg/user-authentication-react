import { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookies";
import "../styles/home.module.css";

class Home extends Component {
  state = {
    isAuthenticated: Cookies.getItem("jwt") ? true : false,
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
