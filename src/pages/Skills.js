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
                            <i className="devicon-mongodb-plain colored"></i>
                            <i className="devicon-express-original colored"></i>
                            <i className="devicon-react-original colored"></i>
                            <i className="devicon-nodejs-plain-wordmark colored"></i>
                            <i className="devicon-c-plain colored"></i>
                            <i className="devicon-javascript-plain colored"></i>
                            <i className="devicon-java-plain colored"></i>
                            <i className="devicon-python-plain colored"></i>
                            <i className="devicon-typescript-plain colored"></i>
                            <i className="devicon-firebase-plain colored"></i>
                            <i className="devicon-angular-plain colored"></i>
                            <i className="devicon-npm-original-wordmark colored"></i>
                            <i className="devicon-tailwindcss-original colored"></i>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Skills;