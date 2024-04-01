import { Box, Container, Typography } from '@mui/material';
import React from 'react'

const Skills = () => {
    return (
        <div className='skills'>
            <Container maxWidth="lg">
                <Box>
                    <Typography variant="h4" align='left' mb={3} className='about-header'>Tech Stack</Typography>
                    <Box>
                        <Typography className='skill-icons'>
                            <i class="devicon-mongodb-plain colored"></i>
                            <i class="devicon-express-original colored"></i>
                            <i class="devicon-react-original colored"></i>
                            <i class="devicon-nodejs-plain-wordmark colored"></i>
                            <i class="devicon-c-plain colored"></i>
                            <i class="devicon-javascript-plain colored"></i>
                            <i class="devicon-java-plain colored"></i>
                            <i class="devicon-python-plain colored"></i>
                            <i class="devicon-typescript-plain colored"></i>
                            <i class="devicon-firebase-plain colored"></i>
                            <i class="devicon-angular-plain colored"></i>
                            <i class="devicon-npm-original-wordmark colored"></i>
                            <i class="devicon-tailwindcss-original colored"></i>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Skills;