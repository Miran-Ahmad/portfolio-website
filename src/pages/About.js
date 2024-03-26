import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
  return (
    <div className='about'>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h4" align='left' mb={3} className='about-header'>About</Typography>
          <Box>
            <Typography align='justify' className='about-text'>
              I'm a Full stack developer with a passion for building top-notch websites. I've a solid understanding of both Frontend and Backend development and I can't wait to utilize my skills in the workplace. I'm a quick learner and am certain that I can be a valueable asset to any web development team.<br /><br />
              I've always had a deep interest in computers, from playing San Andreas back in the day to adding mods to the game. I developed an interest for Web Developmet only when I was 10, seeing my sister write HTML codes in notepad and then on Internet Explorer graphically fascinated me. So getting into computer science was something that was almost destined to happen. Although it took some trial and error, I couldn't be more happy that this is that path that I chose.
            </Typography>
            <div className='about-icons'>
              <GitHubIcon onClick={() => window.open('https://github.com/Miran-Ahmad')} cursor="pointer" />
              <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/miran-ahmad-611673208/')} cursor="pointer" />
              <InstagramIcon onClick={() => window.open('https://www.instagram.com/mdmiranahmad/')} cursor="pointer" />
            </div>
            <Button variant="outlined" style={{ marginTop: '20px', color: '#F4F4F5', border: 'none', backgroundColor: '#27272A', }} >Download CV</Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default About;