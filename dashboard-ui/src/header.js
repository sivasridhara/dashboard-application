import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  active = {
    fontWeight: "bold",
    color: "red"
  };

  header = {
    display: "flex",
    justifyContent: "space-evenly",
    listStyle: "none"
  };
  render() {
    return (
      <div style={this.header}>
       {/* <NavLink exact to="/" activeStyle={this.active}>
          Home
        </NavLink>
        <NavLink to="/posts" activeStyle={this.active}>
          Posts
        </NavLink>*/}
        <NavLink to="/registration" activeStyle={this.active}>
          Registration
        </NavLink>
        <NavLink to="/recordDetails" activeStyle={this.active}>
                  Search Record
                </NavLink>
      </div>
    );
  }
}

export default Header;
