import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

function Input(){
    const [postText, setPostText] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    async function createPost(){
        console.log("inside function")
        axios.post("https://dummyapi.io/data/v1/post/create", 
        {
            owner: '60d0fe4f5311236168a109cb',
            text: postText,
            image: imgUrl,
            likes: 0,
            publishDate: new Date()
        },
        {
            headers: {'app-id': import.meta.env.VITE_API_ID}
        })
        .then(response => {
            console.log(response.data)
        })
    }

    return (
        <Box sx={{mt:'1rem'}}>
            <TextField 
                fullWidth 
                id="standard-basic" 
                label="Your next post..." 
                variant="standard" 
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
            />
            <TextField 
                sx={{mt:'1rem'}} 
                fullWidth id="standard-basic" 
                label="Enter image URL..." 
                variant="standard" 
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
            />

            <Button onClick={createPost}
                sx={{mt:'1rem'}} 
                variant="contained">Submit</Button>
        </Box>
    )
}
export default Input;