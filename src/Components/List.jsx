import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography, Paper } from '@mui/material';

export default function BasicList({ title, campos }) {
  const maxVisibleItems = 5;

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Typography variant="h3" color="primary" sx={{ marginTop: '20px' }}>
        {title}
      </Typography>
      <Paper
        elevation={3}
        style={{
          padding: 20,
          marginTop: 20,
          maxHeight: `${maxVisibleItems * 60}px`,
          overflowY: 'auto',
        }}
      >
        <List>
          {campos.map((campo, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={campo} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
