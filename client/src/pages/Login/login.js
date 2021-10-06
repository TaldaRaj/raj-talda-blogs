import "./login.css";
import {Link} from "react-router-dom"
import {useRef,useContext} from "react"
import {context} from "../../context/context";
import axios from "axios"

 const Login = () => {
   const userRef = useRef()
   const passwordRef = useRef()

   const {dispatch , isFetching} = useContext(context)

   const handleSubmit = async (e) => {
     e.preventDefault()
   
    try{
      dispatch({type:"LOGIN_START"})
      const res = await axios.post("/auth/login", {
        username:userRef.current.value,
        password:passwordRef.current.value
      })

      dispatch({type:"LOGIN_SUCCESS",payload:res.data})
      window.location.replace("/")

    }

    catch(error){
      dispatch({type:"LOGIN_FAILURE"})
    }

   }

   
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input className="login-input" type="text" 
        placeholder="Enter your username..."
        ref={userRef} />
        <label>Password</label>
        <input className="login-input" type="password" 
        placeholder="Enter your password..." 
        ref ={passwordRef}/>
        <button className="login-button" type="submit" disabled={isFetching}>Login</button>
      </form>
        <button className="login-register-button" >
          <Link className="link" to="/register">
          Register
          </Link></button>
    </div>
  );
}

export default Login