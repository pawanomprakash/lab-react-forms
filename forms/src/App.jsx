import { useState } from 'react'
import './App.css'

function App() {

  const [formValues,setformValue]=useState({username:"",lastname:"",email:"",phoneno:""})
  const [formErrors,setFormErrors]=useState({})
  const [submit,setSubmit]=useState(false)
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setformValue({...formValues,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues))

  }

  const validate=(values)=>{
    let errors={}
    const regex= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!values.username){
      errors.username="Please enter your first name";
    }
    if(!values.lastname){
      errors.lastname="Please enter your lastname";
    }
    if(!values.email){
      errors.email="Please enter your email address";
    }else if(!regex.test(values.email)){
      errors.email="Invalid Email Id";
    }
    if(!values.phoneno){
      errors.phoneno="Please enter your phone number";
    }else if(values.phoneno.length !==10 ) {
      errors.phoneno="Invalid phone number"
    }

    setSubmit(Object.values(errors).every((e) => e === ""))

    return errors
  }

  return (
    <div id="formContainer">
      <div id="regStatus">{submit?"Registration successfull!":""}</div>
     <form onSubmit={handleSubmit}>
      <div><input name="username" type="text" placeholder='First name' value={formValues.username} onChange={handleChange}/></div>
      <p>{formErrors.username}</p>
      <div><input name="lastname" type="text" placeholder='Last name' value={formValues.lastname} onChange={handleChange} /></div>
      <p>{formErrors.lastname}</p>
      <div><input name="email" type="text" placeholder='Email-id' value={formValues.email} onChange={handleChange} /></div>
      <p>{formErrors.email}</p>
      <div><input name="phoneno" type="text" placeholder='Phone Number' value={formValues.phoneno} onChange={handleChange} /></div>
      <p>{formErrors.phoneno}</p>
      <div><input  id="register" type="submit" value='Register' /></div>
     </form>
    </div>
  )
}

export default App
