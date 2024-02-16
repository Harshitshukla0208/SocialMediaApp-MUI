import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Input(){
    const [postText, setPostText] = useState("");
    const [imgUrl, setImgUrl] = useState("");

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

            <Button 
                sx={{mt:'1rem'}} 
                variant="contained">Submit</Button>
        </Box>
    )
}
export default Input;