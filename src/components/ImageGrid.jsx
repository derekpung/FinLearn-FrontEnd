import * as React from 'react';
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { HiOutlineInformationCircle } from 'react-icons/hi';

function ImageGrid({ itemData, behaviorGenerator }) {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem 
          key={item.title}
          sx={{cursor: 'pointer'}}
          onClick={behaviorGenerator(item)}
          >
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
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
      ))}
    </ImageList>
  );
}

export default ImageGrid