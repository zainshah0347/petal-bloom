'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating() {
    const value = 3;

    return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating name="read-only" value={value} readOnly style={{fontSize : 15}}/>
        </Box>
    );
}
