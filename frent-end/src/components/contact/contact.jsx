import React ,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios';
import   '../contact/contact';
const AddContact = (props) =>
{
  const initialState = {
     Nom : "",
     Prenom : "",
     Email:"",
     Telephone: "",
     Message : ""
  }
  const [contact,setContact] = useState(initialState)
  const handleChange = (e)=>{
    const {name,value} = e.target
    setContact({...contact,[name]:value})
  }
  const handleClick =async  (e)=>{
    e.preventDefault();
    const res = await axios.post('http://localhost:4000/api/contact/create',contact)
    if(res) props.history.push('/')  

  }
  return (
   <div className="container">
      <h1 className="text-center text-warning"> From Contact</h1>
      <form>
        <div className="form-group">
          <label for="validationCustom01" className="text-success">Prenom:</label>
          <input
            onChange={handleChange}
            name="Nom"
          
            type="text"
            className="form-control text-dark"
            id="validationCustom01"
            placeholder="Nom"
            required
          />
        </div>
        <div className="form-group">
          <label for="validationCustom01" className="text-success">Nom:</label>
          <input
            onChange={handleChange}
            name="Prenom"
            
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Prenom"
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlInput1" className="text-success">Email:</label>
          <input
            onChange={handleChange}
            name="Email"
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label for="example-tel-input" className="text-success" >Telephone</label>
          <input
            onChange={handleChange}
            name="Telephone"
            placeholder="Telephone"
            className="form-control"
            type="Number"
            placeholder="Tele"
            id="example-tel-input"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlTextarea1" className="text-success">Message</label>
          <textarea
            onChange={handleChange}
            name="Message"
           
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
          >  saisir message</textarea>
        </div>
               <button 
        type="button" 
        className="btn btn-success text-center"
        onClick={handleClick}>Envoyer</button>

      </form>
    </div>
  )
}

export default AddContact






// import React, {useState} from 'react'
// import './contact.css'
// import axios from 'axios'



// function Contact() {


//     const[user, setUser] = useState({

//         Prenom:'',
//         Nom:'',
//         Email:'',
//         Telephone:'',
//         Message:''
//     })
//    const handleChange = e =>{
//         setUser({...user,[e.target.id]: e.target.value})
//     }
    
    
//     const submit = e => {
//           e.preventDefault();
//         axios.post("http://localhost:4000/api/contact/create" , user)
        
//     }
    

//    const form = () =>(
//     <div className="wrapper">
//     <div className="form-wrapper">
//       <h1>Contact</h1>
//       <form onSubmit={submit} noValidate >
//         <div className="firstName" >
//           <label htmlFor="first_Name">Prenom</label>

//           <input className=""
//             placeholder="Prenom"
//             type="text"
//             name="firstName"          
//             id="Prenom"
//             onChange={handleChange}
//           />
          
//         </div>
        

//         <div className="lastName">
//           <label htmlFor="last_Name" >Nom</label>

//           <input
//             id="Nom"
//             className=""
//             placeholder="Nom"
//             type="text"
//             name="lastName"
//             onChange={handleChange}
//           />
         
//         </div>
//         <div className="email">
//           <label htmlFor="email">Email</label>

//           <input
//             className=""
//             placeholder="Email"
//             id="Email"
//             type="text"
//             name="email"
//             onChange={handleChange}

//           />
         
//         </div>
//         <div className="phone">
//           <label htmlFor="phone">Telephone</label>
//           <input
//             id="Telephone"
//             className=""
//             placeholder="Telephone"
//             type="tel"
//             name="phone"
//             onChange={handleChange}

//           />


//         </div>
//         <div className="Message">
//           <label htmlFor="message">Message</label>
//           <textarea
//           id="Message"
//            rows="4" 
//            cols="50" 
//            name="comment" 
//            form="usrform"
//            type="text"
//            placeholder="Ecrire Message"
//            onChange={handleChange}


//            > 
//            </textarea>
         
//         </div>
        
//         <div className="createAccount">
//           <button type="submit">ENVOYER</button>
          
//         </div>
//       </form>
//     </div>
//   </div>



//    )
//    return (
    
//     <div>
//        <div title="ContactUs">
//            <div className="row">
//                <div>

//                  { form() }

//                </div>
//             </div>
           

//        </div>
//     </div>
// )
//  }
// export default Contact






