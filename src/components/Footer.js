import { Box, Container, Typography } from '@mui/material';
import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <Container maxWidth="lg">
                <Box className='footer-container'>
                    <Typography variant="body2" mb={1} pt={3} >Made with <span style={{ color: "Red" }}>❤</span> by Miran</Typography>
                </Box>
            </Container>
        </div>
    )
}

export default Footer;