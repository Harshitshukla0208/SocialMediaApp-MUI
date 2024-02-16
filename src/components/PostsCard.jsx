import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useState } from 'react';

export default function PostCard({ authorFirstName, image, content }) {
    const [isLiked, setIsLiked] = useState(false)
    return (
        <Card sx={{
            width: 345, // Set the width of the card
            margin: 'auto',
            marginBottom: '2rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '12px',
            transition: 'transform 0.2s',
            '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
            },
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {authorFirstName.substring(0, 1)}
                    </Avatar>
                }
                title={authorFirstName}
                subheader="September 14, 2016"
                sx={{ paddingBottom: 0 }}
            />
            <CardMedia
                component="img"
                height="194" // Set a fixed height for all images
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{ paddingTop: 0 }}>
                <IconButton aria-label="add to favorites"  onClick={() => setIsLiked(!isLiked)}>
                    {
                        (isLiked) ? <FavoriteIcon sx={{color: red[500]}} /> : <FavoriteBorderIcon />
                    }
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
