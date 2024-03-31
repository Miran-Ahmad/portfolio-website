import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react'

const projects = [
  {
    title: 'Restaurant Landing Page',
    description: 'A simple reataurant landing page to display restaraunt Menu and order online. Front-end project, created using React',
    imageUrl: require('../assets/restaurantImg.png'),
    liveLink: 'https://foodie-restaurant-homepage.netlify.app/',
    gitLink: 'https://github.com/Miran-Ahmad/restaurant-landing-page',
  },
  {
    title: 'Personal Portfolio',
    description: 'My online portfolio giving introduction about myself along with my relevent skills. Also portraying my Projects.',
    imageUrl: require('../assets/portfolioImg.png'),
    liveLink: '/',
    gitLink: 'https://github.com/Miran-Ahmad/portfolio-website',
  },
  {
    title: 'E-commerce  Website',
    description: 'A Full-Stack app for an online shopping firm. Created using the MongoDB, ExpressJS, ReactJS and NodeJS.',
    imageUrl: require('../assets/ecommerceImg.png'),
    liveLink: '/',
    gitLink: 'https://github.com/Miran-Ahmad/Client_side',
  },
];

const ProjectCard = ({ title, description, imageUrl, gitLink, liveLink }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginTop: '10%', border: '1px solid white', borderRadius: '3%' }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={liveLink} style={{ color: '#27272A' }} >Live</Button>
        <Button size="small" href={gitLink} style={{ color: '#27272A' }} >Github</Button>
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