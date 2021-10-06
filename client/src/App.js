import Navbar from "./components/navbar/navbar"
import Home from "./pages/Home/home"
import UserSettings from "./pages/UserSettings/userSettings"
import Login from "./pages/Login/login"
import Register from "./pages/Register/register"
import WritePost from "./pages/writePost/writePost"
import SinglePost from "./pages/single-post/singlePost"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import { useContext } from "react"
import { context } from "./context/context"


const App = () => {
  const {user} = useContext(context);
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/">
      <Home/> 
      </Route>
      <Route exact path="/posts">
      <Home/> 
      </Route>
      <Route exact path="/post/:postId">
      <SinglePost/> 
      </Route>
      <Route exact path="/writepost">
      {user ? <WritePost/> : <Login/>} 
      </Route>
      <Route exact path="/login">
     <Login/>
      </Route>
      <Route exact path="/register">
      <Register/>
      </Route>
      <Route exact path="/settings">
      {user ? <UserSettings/> : <Login/>}
      </Route>
    
     
     
    
     </Switch>
     </Router>
    
  )
}

export default App
