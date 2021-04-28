import React ,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios';
const AddContact = (props) =>
{
  const initialState = {
     nom : "",
     prenom : "",
     email:"",
     phone: "",
     message : ""
  }
  const [contact,setContact] = useState(initialState)
  const handleChange = (e)=>{
    const {name,value} = e.target
    setContact({...contact,[name]:value})
  }
  const handleClick =async  (e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/api/contact/add',contact)
    if(res) props.history.push('/')  

  }
  return (
   <div className="container">
      <h1> Contact Us</h1>
      <form>
        <div className="form-group">
          <label for="validationCustom01">First name</label>
          <input
            onChange={handleChange}
            name="nom"
          
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="First name"
            required
          />
        </div>
        <div className="form-group">
          <label for="validationCustom01">Last name</label>
          <input
            onChange={handleChange}
            name="prenom"
            
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Last name"
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            onChange={handleChange}
            name="email"
            
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label for="example-tel-input">Telephone</label>
          <input
            onChange={handleChange}
            name="phone"
         
            className="form-control"
            type="Number"
            placeholder="1-(555)-555-5555"
            id="example-tel-input"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1">Entre Your Message</label>
          <textarea
            onChange={handleChange}
            name="message"
           
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          onClick={handleClick}
          type="submit"
          className="btn btn-primary mb-3"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddContact
