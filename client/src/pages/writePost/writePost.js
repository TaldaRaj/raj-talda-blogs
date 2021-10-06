import "./writePost.css";
import {useContext, useState} from "react"
import axios from "axios"
import {context} from "../../context/context"

 const WritePost = () => { 

  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [file,setFile] = useState(null)
  const { user } = useContext(context)

  const handleSubmit = async (e)=> {
    e.preventDefault()
    const newPost = {
      username:user.username,
      title,
      desc
    }
    console.log(user.username)
    if(file){
      const data = new FormData()
      const filename =  Date.now() + file.name
      data.append("name",filename)
      data.append("file",file)
      newPost.photo = filename

      try{
        await axios.post("/upload",data)
  
      }
      catch(error)
      {
        console.log("upload error")
      }
    }
    

    try{
      const res = await axios.post("/posts",newPost)
      window.location.replace("/post/"+ res.data._id)
    }
    catch(error){
      console.log("error")
    }

  }

  return (
    <div className="write">
      {file && 
      <img
      className="write-image"
      src={URL.createObjectURL(file)}
      alt=""
    />}
      
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input id="file-input" type="file" style={{ display: "none" }} 
          onChange={(e) => setFile(e.target.files[0])} />
          <input
            className="write-input"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="write-form-group">
          <textarea
            className="write-input writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="write-submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default WritePost