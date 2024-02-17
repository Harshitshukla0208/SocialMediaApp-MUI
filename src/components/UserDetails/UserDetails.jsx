import Avatar from '@mui/material/Avatar';
import Navbar from '../Navbar'

export default function SizeAvatars() {
    return (
        <>
            <Navbar />
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 60, height: 60 }}
            />
        </>
    );
}