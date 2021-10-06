import "./singlePostComp.css"
import { useLocation } from "react-router";
import { useContext, useEffect,useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import {context} from "../../context/context"

const SinglePostComp = () => {

  const [post, setPost] = useState({})
  const {user} = useContext(context)
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [updateMode,setUpdateMode] = useState(false)
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const PF = "http://localhost:5000/images/"

  const handleDelete = async()=> {
    try{
    await axios.delete(`/posts/${post._id}`,{
      data : {username:user.username}
    })
    window.location.replace("/")
    }
    catch(error){
      console.log("delete error")
    }

  }

  const handleUpdate = async () => {
    try{
      await axios.put(`/posts/${post._id}`,{
        username:user.username,
        title,
        desc
      }) 
      setUpdateMode(false)
      //window.location.reload() ---->no need 
    }
    catch(error)
    {
      console.log("update error")
    }


  }
 
  useEffect(()=>  {
    const getPost = async ()=>{
      const res = await axios.get("/posts/"+path)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)
    
    }
    
getPost()
  },[path])

    return (
        <div className="single-post">
        <div className="single-post-wrapper">
          {post.photo && 
          <img
          className="single-post-image"
          src={PF + post.photo}
          alt="single post"
        /> }
          {updateMode ? (
          <input 
          type="text" 
          value={title}
          className="single-post-title-input"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}/>
          ) : (
          <h1 className="single-post-title">
            {post.title}
            {post.username === user?.username && 
            <div className="single-post-edit">
              <i className="single-post-icon far fa-edit" onClick={() => setUpdateMode(true)}></i>
              <i className="single-post-icon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
}
          </h1>)
}
          <div className="single-post-info">
            <span>
              Author:
              <Link to={`/?user=${post.username}`} className="link">
              <b className="single-post-author">
              {post.username}
              </b>
              </Link>
            </span>
            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>
          {updateMode ? (<textarea
            className="single-post-desc-input"
            value={desc}
            onChange = {(e)=>setDesc(e.target.value)}>
          </textarea>
          ) : (
            <p className="single-post-desc">
            {post.desc}
            </p>)}
            {updateMode &&
        <button className="single-post-button" onClick={handleUpdate}>
          Update</button>
        }
        </div>
      </div>
    );
  }

export default SinglePostComp
