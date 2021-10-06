import "./post.css"
import {Link} from "react-router-dom"


const Post = ({post}) => {
    const PF = "http://localhost:5000/images/"
    return (
        
        <div className="post">
        {post.photo && 
        <img
        className="post-image"
        src={PF + post.photo}
        alt=""/>}
        
        <div className="post-info">
            <div className="post-cat">
                {post.categories.map((c)=>(
                    <span key={c._id}>{c.name}</span>
                ))}
                
            </div>
            <Link to={`/post/${post._id}`} className="link">
            <span className="post-title">{post.title}</span>
            </Link>
            
            <hr />
            <span className="post-date">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="post-desc">
           {post.desc}
        </p>
        </div>   
        
    )
}

export default Post
