import React, { Component } from 'react';
import "./contact.css";
import axios from "axios";

class App extends Component {


  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Contact</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Prenom</label>
              <input
                className=""
                placeholder="Prenom"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Nom</label>
              <input
                className=""
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className=""
                placeholder="Email"
                type="text"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>
            <div className="phone">
              <label htmlFor="password">Telephone</label>
              <input
                className=""
                placeholder="Telephone"
                type="tel"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="Message">
              <label htmlFor="message">Message</label>
              <textarea rows="4" cols="50" name="comment" form="usrform"> </textarea>
             
            </div>
            

            <div className="createAccount">
              <button type="submit">ENVOYER</button>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;