import React, { Component } from 'react';
import RegistrationService from './RegistrationService';
import DateTimePicker from 'react-datetime-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default class Registration extends Component {

  constructor(props){
    super(props);


    this.state ={firstName:"",lastName:"",contactNo:"",emailAddress:"",description:"", appointmentDate: new Date(), dob : new Date()};


    this.handleInput = this.handleInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleInput(event){


  event.preventDefault();
    console.log('firstName:'+this.state.firstName+', lastName:'+this.state.lastName+',contactNo:'+this.state.contactNo+',emailAddress:'+this.state.emailAddress+',description:'+this.state.description);
  this.setState({[event.target.id] : event.target.value});

  }

  handleFormSubmit(event){

    event.preventDefault();
    console.log("Hello");
    console.log("First Name : "+this.state.firstName);
    RegistrationService.registerUser({
    firstName:this.state.firstName,
    lastName:this.state.lastName,
    contactNo:this.state.contactNo,
    emailAddress:this.state.emailAddress,
    description:this.state.description,
    appointment:this.state.appointmentDate,
    dob:this.state.dob
  }).then((response)=>{

alert(JSON.stringify(response.registrationId));
  //console.log(JSON.stringify(response.json()));
  }).catch(error => {
  console.error("Error occured while fetching report schedule list data "+error.message)});

  }


 handleChange(date) {
    this.setState({
      dob: date
    });
  }

   onChange = appointmentDate => this.setState({ appointmentDate });

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Enter FirstName"
                onChange={this.handleInput}
                value={this.state.firstName}
              />
              </div>

            <div className="htmlForm-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter LastName"
                onChange={this.handleInput}
                value={this.state.lastName}
              />
              </div>

            <div className="form-group">
              <label htmlFor="contactNo">Contact Number</label>
              <input
                type="text"
                className="form-control"
                id="contactNo"
                placeholder="Enter Contact Number"
                onChange={this.handleInput}
                value={this.state.contactNo}
              />
              </div>

               <div className="form-group">
               <label htmlFor="dob">Date Of Birth</label><br/>
               <DatePicker id="dob" selected={this.state.dob} onChange={this.handleChange} value={this.state.dob} />
               </div>

               <div className="form-group">
               <label htmlFor="appointment">Appointment</label><br/>
               <DateTimePicker onChange={this.onChange} id="appointment" value={this.state.appointmentDate}/>
               </div>


            <div className="form-group">
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="emailAddress"
                className="form-control"
                id="emailAddress"
                aria-describedby="emailHelp"
                placeholder="Enter emailAddress"
                onChange={this.handleInput}
                value={this.state.emailAddress}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>



            <div className="form-group">
              <label htmlFor="description">User Description</label>
              <textarea className="form-control" id="description" rows="3"
                onChange={this.handleInput}
                value={this.state.description}/>
            </div>

             <input type="submit" value="Submit" />
          </form>


    );
  }
}
