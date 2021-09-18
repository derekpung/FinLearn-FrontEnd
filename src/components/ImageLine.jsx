import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function TitlebarImageList({image1, image2, image3, image4, title1, title2, title3, title4, message}) {
  console.log(message);
  const itemData = [
    {
      img: image1,
      title: title1,
      author: "",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: image2,
      title: title2,
      author: '',
    },
    {
      img: image3,
      title: title3,
      author: "",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: image4,
      title: title4,
      author: "",
    }
  ];


  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      {/* <ImageListItem key="Subheader" cols={2}> */}
        {/* <ListSubheader component="div"></ListSubheader> */}
      {/* </ImageListItem> */}
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


