import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { FaAward, FaShareSquare } from 'react-icons/fa'

function ListShare({ listData }) {
  return (
    <>
    <List sx={{ width: '100%' }}>
      {
        listData.map(
          (item, idx) => (
            <ListItem 
              key={idx}
              alignItems="flex-start"
              >
              <ListItemIcon>
                <FaAward size="2em"/>
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.subtitle}
                    </Typography>
                    {` — ${item.text}`}
                  </>
                }
              />
            </ListItem>
          )
        )
      }
    </List>
    </>
  )
}

export default ListShare