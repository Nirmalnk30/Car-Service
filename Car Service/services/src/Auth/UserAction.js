import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import UserList from "./GetUser";
import AddUser from "./AddUser";
import { Link } from "react-router-dom";
import axios from "axios";

const apiUrl = "http://localhost:5272/asp/Car";

class UserActionApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddUser: false,
      error: null,
      response: {},
      userData: {},
      isEdituser: false,
      isCarsdata : true,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onCreate() {
    this.setState({ isAddUser: true });
    this.setState({ isCarsdata: false });
  }
  onDetails() {
    this.setState({ isCarsdata: true });
    this.setState({ isAddUser: false });
  }

  onFormSubmit(data) {
    this.setState({ isAddUser: true });
    this.setState({ isCarsdata: false });
    if (this.state.isEdituser) {
      axios.put(apiUrl + "/UpdateEmployeeDetails", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isAddUser: false,
          isEdituser: false,
        });
      });
    } else {
      axios.post(apiUrl + "/InsertUser", data).then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          isAddUser: false,
          isEdituser: false,
        });
      });
    }
  }

  editUser = (id) => {
    this.setState({ isCarsdata: false });
    axios.get(apiUrl + "/GetUserDetailsById/" +id).then(
      (result) => {
        this.setState({
          isEdituser: true,
          isAddUser: true,
          userData: result.data,
        });
      },
      (error) => {
        this.setState({ error });
      }
    );
  };

  render() {
    let userForm;
    if (this.state.isAddUser || this.state.isEditUser) {
      userForm = (
        <AddUser
          data-testid="adduser"
          onFormSubmit={this.onFormSubmit}
          user={this.state.userData}
        />
      );
    }
    return (
      <div className="App">
        <button id="logout"><Link to="/" className="logbtn" >Logout</Link></button>
        <Container>
          <h1 style={{ textAlign: "center" }}>CAR SERVICES</h1>
          <hr></hr>
          {!this.state.isCarsdata && (
            <Button variant="primary" onClick={() => this.onDetails()}>
              {" "}
              USER DETAILS
            </Button>
          )}
          {!this.state.isAddUser && (
            <Button variant="primary" onClick={() => this.onCreate()}>
              ADD USER
            </Button>
          )}
          <br></br>
          {!this.state.isAddUser && (
            <UserList data-testid="userlist" editUser={this.editUser} />
          )}
          {userForm}
        </Container>
      </div>
    );
  }
}
export default UserActionApp;