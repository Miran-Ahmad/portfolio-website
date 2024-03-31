import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react'

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1 fsfsekfa mwa ffeknf',
    imageUrl: require('../assets/cardImg.png'),
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2 frgrgsre fdefefe wfrwfewf',
    imageUrl: require('../assets/cardImg.png'),
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3 ssssssssss ssssssssss',
    imageUrl: require('../assets/cardImg.png'),
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3 ssssssssss ssssssssss',
    imageUrl: require('../assets/cardImg.png'),
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3 ssssssssss ssssssssss',
    imageUrl: require('../assets/cardImg.png'),
  },
];


const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ marginTop: '10%' }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imageUrl}
      // image={require('../assets/cardImg.png')}
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
        <Button size="small">Live</Button>
        <Button size="small">Github</Button>
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
                <ProjectCard title={project.title} description={project.description} imageUrl={project.imageUrl} />
              </Grid>
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Projects;