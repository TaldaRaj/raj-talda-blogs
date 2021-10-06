import Sidebar from "../../components/sidebar/sidebar"
import SinglePostComp from "../../components/singlePostComp/singlePostComp"
import "./singlePost.css"

const SinglePost = () => {
    return (
        <div className="single">
            <SinglePostComp/>
            <Sidebar/>
        </div>
    )
}

export default SinglePost
