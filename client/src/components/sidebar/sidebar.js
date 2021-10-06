import "./sidebar.css"
import axios from "axios"
import {useEffect,useState} from "react"
import {Link} from "react-router-dom"
 

const Sidebar = () => {

  const [categories,setCategories] = useState([])
  useEffect(()=> {
    const getCategories = async () => {
      const res = await axios.get("/category")
      setCategories(res.data)
    }

    getCategories()
  },[])
    return (
        <div className="sidebar">
            <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          {
            categories.map((c)=>(
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebar-list-items">{c.name}</li>
              </Link>
            ))
          }
            
            
        </ul>
        <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
          <i className="sidebar-icon fab fa-pinterest-square"></i>
          <i className="sidebar-icon fab fa-twitter-square"></i>
        </div>
      </div>
      </div>  
          
        </div>
    )
}

export default Sidebar
