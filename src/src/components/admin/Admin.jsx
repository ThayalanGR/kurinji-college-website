import React, { Component } from "react";
import { Loader, Login, Dashboard } from "../../components";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isAuthenticated: false
    };
  }

  componentWillMount() {
    const token = localStorage.getItem("token") || "";
    if (token.length > 0) {
      //validate token
      const isValid = true;

      if (isValid) {
        this.setState({ isAuthenticated: true });
      }
    }
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ? (
      <Loader type={"bars"} />
    ) : !this.state.isAuthenticated ? (
      <Login />
    ) : (
      <Dashboard isAuthenticated={this.state.isAuthenticated} />
    );
  }
}
