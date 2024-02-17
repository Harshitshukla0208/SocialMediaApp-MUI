import MainContainer from './MainContainer/MainContainer'
import Input from './Input/Input'
import PostsCardContext from './providers/PostsProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'

function SocialApp(){
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

    return (
        <PostsCardContext.Provider value={{posts, setPosts}}>
            
            <Input />
            <MainContainer />
        </PostsCardContext.Provider>
    )
}
export default SocialApp;