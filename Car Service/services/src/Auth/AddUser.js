import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {

      //userId: '',
      regEmail: "",
      regUsername: "",
      regMobilenumber: "",
      regPassword: "",
      regServicesName:"",
      regCarsModel:"",
      regServicesPrice:"",
      regServiceDate:"",
    };


    if (props.user.id) {
      this.state = props.user;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.id) {
      pageTitle = <h2>Edit User</h2>;
      actionStatus = <b>Update</b>;
    } else {
      pageTitle = <h2>ADD CAR DETAILS</h2>;
      actionStatus = <b>SAVE</b>;
      
    }

    return (
      <div>
        <h2> {pageTitle}</h2>
        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>

           
      
         
              <Form.Group controlId="regEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="regEmail"
                  data-testid="regEmail"
                  value={this.state.regEmail}
                  onChange={this.handleChange}
                  placeholder=" Enter the Email"
                />
                 </Form.Group>
            
               

             
              <Form.Group controlId="regUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="regUsername"
                  data-testid="regUsername"
                  value={this.state.regUsername}
                  onChange={this.handleChange}
                  placeholder="Enter the Username"
                />
                </Form.Group>
                


                
              <Form.Group controlId="regMobilenumber">
                <Form.Label>MobileNumber</Form.Label>
                <Form.Control
                  type="text"
                  name="regMobilenumber"
                  data-testid="regMobilenumber"
                  value={this.state.regMobilenumber}
                  onChange={this.handleChange}
                  placeholder="Enter the MobileNumber"
                />
              </Form.Group>
          
               
               
              
              <Form.Group controlId="regPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  name="regPassword"
                  data-testid="regPassword"
                  value={this.state.regPassword}
                  onChange={this.handleChange}
                  placeholder="Enter the Password"
                />
              </Form.Group>
           

             
              <Form.Group controlId="regServicesName">
                <Form.Label>Service Name</Form.Label>
                <Form.Control
                  type="text"
                  name="regServicesName"
                  data-testid="regServicesName"
                  value={this.state.regServicesName}
                  onChange={this.handleChange}
                  placeholder="Enter the Service Name"
                  
                />
                </Form.Group>

                <Form.Group controlId="regCarsModel">
                <Form.Label>CarsModel</Form.Label>
                <Form.Control
                  type="text"
                  name="regCarsModel"
                  data-testid="regCarsModel"
                  value={this.state.regCarsModel}
                  onChange={this.handleChange}
                  placeholder="Enter the Cars Model"
                />
                </Form.Group>

                <Form.Group controlId="regServicesPrice">
                <Form.Label>Services Price</Form.Label>
                <Form.Control
                  type="text"
                  name="regServicesPrice"
                  data-testid="regServicesPrice"
                  value={this.state.regServicesPrice}
                  onChange={this.handleChange}
                  placeholder="Enter the Services Price"
                />
                </Form.Group>

                <Form.Group controlId="regServiceDate">
                <Form.Label>Service Date</Form.Label>
                <Form.Control
                  type="text"
                  name="regServiceDate"
                  data-testid="regServiceDate"
                  value={this.state.regServiceDate}
                  onChange={this.handleChange}
                  placeholder="Enter the Service Date"
                />
                <Button variant="success" type="submit">
                  {actionStatus}
                </Button>

              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddUser;