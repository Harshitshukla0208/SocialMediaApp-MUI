import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import PostCardList from '../PostCardList/PostCardList';
import UserList from '../UserList/UserList';

const StyledGridContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(6), // Adjust top margin
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
    // Add custom styles here
}));

export default function MainContainer() {
    return (
        <StyledGridContainer>
            <Grid container alignItems="start" justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                <StyledGridItem>
                    {/* users */}
                    <UserList />
                </StyledGridItem>
                <StyledGridItem container alignItems="center" justifyContent="center" direction="column" md={8}>
                    {/* posts */}
                    <PostCardList />
                </StyledGridItem>
            </Grid>
        </StyledGridContainer>
    );
}
