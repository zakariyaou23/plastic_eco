import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faDownload, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';

export default function MachineCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        title="Extruder"
        className='text-center font-bold'
      />
        <CardMedia
          component="img"
          height="100"
          image="/machine.png"
          alt="earth"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          An extruder is a machine that heats and pushes a material through a shaped mold called a die.  The material is forced through the die opening, forming a continuous product with the same shape as the opening.  Extruders are used in a wide variety of industries to create a vast array of products.
          </Typography>
        </CardContent>
      <CardActions className='flex justify-between'>
        <Button color="success">
            <FontAwesomeIcon size='lg' icon={faThumbsUp} />
        </Button>
        <Button color="error">
            <FontAwesomeIcon size='lg' icon={faThumbsDown} />
        </Button>
        <Button color="primary">
            <FontAwesomeIcon size='lg' icon={faComment} />
        </Button>
        <Button color="primary">
          <FontAwesomeIcon size='lg' icon={faDownload} />
        </Button>
      </CardActions>
    </Card>
  );
}