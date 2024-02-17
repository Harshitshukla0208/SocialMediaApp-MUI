import { useEffect, useContext } from "react";
import PostCard from "../PostsCard";
import axios from "axios";
import PostCardContext from '../providers/PostsProvider'

function PostCardList(){
    // const [posts, setPosts] = useState([])
    const {posts, setPosts} = useContext(PostCardContext)
    useEffect(() => {
        // we will download the content from dummyapi.io
        async function func() {
            const response = await axios.get("https://dummyapi.io/data/v1/post", 
                {headers: {'app-id' : import.meta.env.VITE_API_ID}}
            )
            setPosts([...response.data.data])
        }
        func();
    },[posts])
    
    return ( (posts.length == 0) ? "loading..." :
        posts.map((post) => <PostCard content={post.text} image={post.image} authorFirstName={post.owner.firstName} key={post.id} />)
    )
}

export default PostCardList