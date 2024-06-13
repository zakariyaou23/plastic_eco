import React from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import plan1 from '@/public/plan1.jpg';
import plan2 from '@/public/plan2.jpg';

export default function ProcessCard() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        title="Extruder Plan"
        className='text-center font-bold'
      />
        <CardContent>
        <div className="grid grid-cols-2 mb-2">
            <Image src={plan1} alt={'plan1'} />
            <Image src={plan2} alt={'plan2'} />
        </div>
          <Typography variant="body2" color="text.secondary">
          An extruder is a machine that heats and pushes a material through a shaped mold called a die.  The material is forced through the die opening, forming a continuous product with the same shape as the opening.  Extruders are used in a wide variety of industries to create a vast array of products.
          </Typography>
        </CardContent>
      <CardActions className='flex justify-end'>
        <Button color="primary">
          <FontAwesomeIcon size='lg' icon={faDownload} />
        </Button>
      </CardActions>
    </Card>
  );
}