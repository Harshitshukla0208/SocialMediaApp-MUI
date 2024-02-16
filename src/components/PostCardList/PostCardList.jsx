import { useEffect, useState } from "react";
import PostCard from "../PostsCard";
import axios from "axios";

function PostCardList(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        // we will download the content from dummyapi.io
        async function func() {
            const response = await axios.get("https://dummyapi.io/data/v1/post", 
                {headers: {'app-id' : import.meta.env.VITE_API_ID}}
            )
            setPosts([...response.data.data])
        }
        func();
    },[])
    
    return ( (posts.length == 0) ? "loading..." :
        posts.map((post) => <PostCard content={post.text} image={post.image} authorFirstName={post.owner.firstName} key={post.id} />)
    )
}

export default PostCardList