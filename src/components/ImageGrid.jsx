import * as React from 'react';
import { Grid, IconButton, ImageListItem, ImageListItemBar } from '@mui/material';
import { HiOutlineInformationCircle } from 'react-icons/hi';

function ImageGrid({ itemData, behaviorGenerator }) {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2 }}
    >
      {itemData.map((item) => (
        <Grid
          item
          key={item.title}
          xs={12}
          sm={6}
          md={3}
        >
          <ImageListItem 
            style={{
              height: "100%"
            }}
            sx={{
              cursor: 'pointer'
            }}
            onClick={behaviorGenerator(item)}
            >
            <img
              src={item.image_link}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <HiOutlineInformationCircle />
                </IconButton>
              }
            />
          </ImageListItem>
        </Grid>
      ))}
    </Grid> 
  );
}

export default ImageGrid