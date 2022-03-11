import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box'; 
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: '#233',
        height: '100%',
    },
    cardContainer: {
        minHeight: 380,
        maxWidth: 345,
        margin: '1rem auto',
    },
}));

const projects = [
    {
        title: '5 o\'clock somehwere',
        description: 'A web based application that allows users to search for various cocktails and retrieve the required ingredients and image(s) of the drink',
        site: 'https://aleksandrgorbach.github.io/5-o-clock-somewhere/',
        code: 'https://githubs.com/AleksandrGorbach/5-o-clock-somewhere',
    },
    {
      id: 2,
      title: "InsideOut",
      // img: `${InsideOut}`,
      description:
        "Inside Out is a mental health web application centered around expressing yourself and bringing your concerns & fears to the surface so that you can engage and grow.",
      site: "https://inside-out-37728e.netlify.app/",
      code: "https://github.com/AleksandrGorbach/Inside_Out",
    },
    {
      id: 3,
      title: "SkillBid",
      // img: `${SkillBid}`,
      description:
        "A web based application that allows users to list a service/need and have potential freelance workers bid on their project/listing. The landing page displays active listings and has a search feature to sort for more specific listings based on the users capabilities.",
      site: "https://awesome-jepsen-f2cb4f.netlify.app/",
      code: "https://github.com/AleksandrGorbach/Skill-Bid",
    },
    {
      id: 4,
      title: "ApexArchive",
      // img: `${ApexArchive}`,
      description:
        "Apex Archive is a full stack application that allows users to browse through the Apex Legends character list. Users that have created an account can create, update and delete posts tied to their account.",
      site: "https://apex-archive.netlify.app/",
      code: "https://github.com/AleksandrGorbach/Apex_Archive",
    },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <a href={project.code}>
                    Share
                  </a>
                </Button>
                <Button size="small" color="primary">
                  <a href={project.site}>
                    Live Demo
                  </a>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;