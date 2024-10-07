import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react'

const projects = [
  {
    title: 'EliteEstate | Real Estate',
    description: 'A comprehensive real estate application to streamline property listings and facilitate user interactions.',
    imageUrl: require('../assets/realEstateImg.png'),
    liveLink: 'https://real-estate-mern-laea.onrender.com/',
    gitLink: 'https://github.com/Miran-Ahmad/real-estate',
  },
  {
    title: 'Personal Portfolio',
    description: 'My online portfolio giving introduction about myself along with my relevent skills. Also portraying my Projects.',
    imageUrl: require('../assets/portfolioImg.png'),
    liveLink: 'https://miranahmad.netlify.app/',
    gitLink: 'https://github.com/Miran-Ahmad/portfolio-website',
  },
  {
    title: 'CartNet | E-commerce',
    description: 'A Full-Stack app for an online shopping firm. Created using the MERN stack with other NPM packages.',
    imageUrl: require('../assets/ecommerceImg.png'),
    liveLink: 'https://cartnet.netlify.app/',
    gitLink: 'https://github.com/Miran-Ahmad/cartNet-ecommerce',
  },
];

const ProjectCard = ({ title, description, imageUrl, gitLink, liveLink }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginTop: '10%', border: '0.5px solid white', borderRadius: '3%' }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imageUrl}
      />
      <CardContent style={{ backgroundColor: '#0d1117', color: '#F4F4F5' }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="#F4F4F5">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ backgroundColor: '#0d1117' }}>
        <Button size="small" href={liveLink} style={{ color: '#F4F4F5' }} >Live</Button>
        <Button size="small" href={gitLink} style={{ color: '#F4F4F5' }} >Github</Button>
      </CardActions>
    </Card>
  );
};

const Projects = () => {
  return (
    <div className='projects'>
      <Container maxWidth="lg">
        <Box>
          <Typography variant="h4" align='left' mb={3} className='about-header'>Projects</Typography>
          <Box className='card-container'>
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={3}>
                <ProjectCard title={project.title} description={project.description} imageUrl={project.imageUrl} liveLink={project.liveLink} gitLink={project.gitLink} />
              </Grid>
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Projects;