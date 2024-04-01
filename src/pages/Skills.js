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
                            <i class="devicon-mongodb-plain"></i>
                            <i class="devicon-express-original"></i>
                            <i class="devicon-react-original"></i>
                            <i class="devicon-nodejs-plain-wordmark"></i>
                            {/* <i class="devicon-c-plain"></i> */}
                            {/* <i class="devicon-cplusplus-plain"></i> */}
                            {/* <i class="devicon-html5-plain"></i> */}
                            {/* <i class="devicon-css3-plain"></i> */}
                            <i class="devicon-javascript-plain"></i>
                            <i class="devicon-java-plain"></i>
                            <i class="devicon-python-plain"></i>
                            {/* <i class="devicon-powershell-plain"></i> */}
                            <i class="devicon-typescript-plain"></i>
                            {/* <i class="devicon-firebase-plain"></i> */}
                            <i class="devicon-angular-plain"></i>
                            <i class="devicon-npm-original-wordmark"></i>
                            <i class="devicon-tailwindcss-original"></i>
                            {/* <i class="devicon-figma-plain"></i> */}
                            {/* <i class="devicon-canva-original"></i> */}
                            {/* <i class="devicon-postman-plain"></i> */}
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Skills;