import Header from "../../components/header/header"
import Posts from "../../components/posts/posts"
import Sidebar from "../../components/sidebar/sidebar"
import { useLocation } from "react-router"
import {useState,useEffect} from "react"
import "./home.css"
import axios from "axios"

const Home = () => {
    const {search} = useLocation();
    const [posts,setPosts] = useState([])

    useEffect(()=> {
    const fetchPosts = async()=>{

    const res = await axios.get("/posts"+search)
    setPosts(res.data)
        
    }
    fetchPosts()
    },[search])
    
    return (
        <>
            <Header/>
            <div className="home">
                <Posts posts={posts} key={posts._id}/>
                <Sidebar/>
            </div>
        </>
    )
}

export default Home
