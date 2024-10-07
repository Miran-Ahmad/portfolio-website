import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const About = () => {
  return (
    <div className='about'>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h4" align='left' mb={3} className='about-header'>About</Typography>
          <Box>
            <Typography align='justify' className='about-text'>
              I'm a Web Developer with a passion for building top-notch websites. I've a solid understanding of both Frontend and Backend development and I can't wait to utilize my skills in the workplace. I'm a quick learner and am certain that I can be a valuable asset to any web development team.<br /><br />
              I've always had a deep interest in computers. Getting into computer science was something that i always wanted to happen. Although it took some trial and error, I couldn't be more happy that this is that path that I chose.
            </Typography>
            <div className='about-icons'>
              <GitHubIcon onClick={() => window.open('https://github.com/Miran-Ahmad')} cursor="pointer" id='icon' />
              <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/miran-ahmad-611673208/')} cursor="pointer" id='icon' />
              <InstagramIcon onClick={() => window.open('https://www.instagram.com/mdmiranahmad/')} cursor="pointer" id='icon' />
              <MailOutlineIcon onClick={() => window.open('mailto:222miran222@gmail.com')} cursor="pointer" id='icon' />
            </div>
            <Button variant="outlined" href="https://drive.google.com/file/d/1dGFbvMhYV2v6_x5Cd73mTxhjG9M9_LP9/view?usp=sharing"
              style={{
                marginTop: '20px',
                color: '#F4F4F5',
                border: '0.5px solid rgb(100, 100, 100)',
                backgroundColor: '#27272A',
              }} >Download CV<ArrowDownwardIcon style={{ marginLeft: '5px' }} fontSize='small' /></Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default About;