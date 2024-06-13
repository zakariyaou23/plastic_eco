import React from 'react';
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export default function PostCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            I
          </Avatar>
        }
        action={
          <IconButton aria-label="ellipsis" className='mx-2'>
            <FontAwesomeIcon icon={faEllipsisV} />
          </IconButton>
        }
        title="Golden Plastic"
        subheader="September 14, 2016"
      />
        <CardMedia
          component="img"
          height="100"
          image="/recycle.jpg"
          alt="earth"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Plastic recycling is good.
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Our world is awash in plastic. While it serves many purposes, the sheer volume of plastic waste poses a significant threat to our environment. Thankfully, there is a champion in this fight: the plastic recycling machine.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
    </Card>
  );
}