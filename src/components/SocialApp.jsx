import Navbar from './Navbar'
import MainContainer from './MainContainer/MainContainer'
import Input from './Input/Input'
import PostsCardContext from './providers/PostsProvider'
import { useState } from 'react'

function SocialApp(){
    const [posts, setPosts] = useState([])
    return (
        <PostsCardContext.Provider value={{posts, setPosts}}>
            <Navbar />
            <Input />
            <MainContainer />
        </PostsCardContext.Provider>
    )
}
export default SocialApp;