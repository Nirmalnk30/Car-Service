import React from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

const apiUrl = "http://localhost:5272/asp/Car";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl + "/GetAllCars")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteUser(id) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteUserDetails/" +id).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.id !== id),
      });
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
                <button id="logout"><Link to="/" className="logbtn" >Logout</Link></button>
          <Table>
            <thead className="btn-primary">
              <tr>
               
                <th>Email</th>
                <th>Username</th>
                <th>MobileNumber</th>
                <th>Password</th>
                <th>ServicesName</th>
                <th>CarsModel</th>
                <th>ServicesPrice</th>
                <th>ServiceDate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} data-testid="userrow">
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.mobilenumber}</td>
                  <td>{user.password}</td>
                  <td>{user.servicesName}</td>
                  <td>{user.carsModel}</td>
                  <td>{user.servicesPrice}</td>
                  <td>{user.serviceDate}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => this.props.editUser(user.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => this.deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default UserList;