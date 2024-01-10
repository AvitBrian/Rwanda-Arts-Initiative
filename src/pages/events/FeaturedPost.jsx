import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea >
      <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: [200, 550, 550] }}>
  <CardMedia
    component="img"
    sx={{ width: 1, height: '350px', objectFit: 'cover', objectPosition: 'top', display: { xs: 'none', sm: 'block' } }}
    image={post.image}
    alt={post.imageLabel}
  />
  <CardContent sx={{
    overflow: 'hidden',
    flex: 1,
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '7',
    WebkitBoxOrient: 'vertical',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'lightgrey', 
    }
  }}>
    <Typography component="h2" variant="h5" sx={{ fontSize: [20, 32, 24], fontWeight: '500' }}>
      {post.title}
    </Typography>
    <Typography variant="subtitle1" color="text.secondary">
      {post.date}
    </Typography>
    <Typography variant="subtitle1" paragraph>
      {post.description}
    </Typography>
    <Typography variant="subtitle1" color="primary">
      <Button variant="contained" color="primary"><Link to="/checkout">Book a spot!</Link></Button>
    </Typography>
  </CardContent>
</Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;

