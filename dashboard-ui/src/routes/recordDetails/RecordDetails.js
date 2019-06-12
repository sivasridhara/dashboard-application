import React, { Component } from 'react';
import RecordDetailsService from './RecordDetailsService.js';
import { Table } from 'react-bootstrap/Table';


export default class RecordDetails extends Component {

  constructor(props){
    super(props);


    this.state ={registrationId:"", user: null};



    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleInput(event){


  event.preventDefault();
    console.log("Registration Id "+ event.target.value);
  this.setState({[event.target.id] : event.target.value});

  }

 handleFormSubmit(event){

    console.log("Hello");
     RecordDetailsService.fetchUser({
    registrationId:this.state.registrationId
  }).then((response)=>{

        //alert(JSON.stringify(response));
        this.setState({user: response});
      })
      .catch(error => {console.log(error)});

  };







  render() {
    return (
      <div>
        <div className="form-group">
        <label htmlFor="firstName">Registration Id</label>
        <input
        type="text"
        className="form-control"
        id="registrationId"
        name="registrationId"
        placeholder="Enter Registration Id"
        onChange={this.handleInput}
        value={this.state.registrationId}
        />
      </div>

      <input type="button" value="Submit"  onClick={this.handleFormSubmit} />



      {this.state.user != null &&

        <div>
        <br></br>
        <table border="1" width='50%'>
          <tbody>
              <tr>
                  <td><b>FIRST NAME</b></td>
                  <td>{this.state.user.firstName}</td>
              </tr>
              <tr>
                  <td><b>LAST NAME</b></td>
                  <td>{this.state.user.lastName}</td>
              </tr>
              <tr>
                  <td><b>EMAIL ADDRESS</b></td>
                  <td>{this.state.user.emailAddress}</td>
              </tr>
              <tr>
                  <td><b>DESCRIPTION</b></td>
                  <td>{this.state.user.description}</td>
              </tr>
              <tr>
                  <td><b>REGISTRATION ID</b></td>
                  <td>{this.state.user.registrationId}</td>
              </tr>
              <tr>
                  <td><b>APPOINTMENT</b></td>
                  <td>{this.state.user.appointment}</td>
              </tr>
              <tr>
                  <td><b>DOB</b></td>
                  <td>{this.state.user.dob}</td>
              </tr>
          </tbody>
        </table>
        </div>

          }
    </div>



    );
  }
}
