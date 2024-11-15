import React,{useState} from 'react'
import './CSS/LoginSignup.css'
function LoginSignup() {

  const [state,setState]= useState("Login");
   const [formData,setFormData]= useState({
    username:"",
    password:"",
    email:""
   })
   const changeHandler = (e)=>{
       setFormData({...formData,[e.target.name]:e.target.value})
   }
  const login = async ()=>{
    console.log("Login Function Executed",formData)
    let responseData;

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      }
      
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }

  const signup = async () => {
    console.log("Sign up function executed", formData);
    let responseData;

    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      }
      
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={FormData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address'/>
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Sign Up"?signup():login()}}>Continue</button>
        {state==="Sign Up"
        ?<p className="loginsignup-login">Already have an account? <span  onClick={()=>{setState("Login")}}>Login Here</span></p>
        :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Sign Up Here</span></p>
        }
        
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
