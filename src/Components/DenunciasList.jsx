import React from 'react';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';

const CommentsList = () => {
  const commentsData = [
    {
      id: 1,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
    {
      id: 2,
      user: 'John Doe',
      avatarUrl: 'URL de la imagen del avatar',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quod obcaecati itaque nisi doloribus ipsam? Quas adipisci ut laudantium earum iusto pariatur hic. Quia voluptatem repudiandae, dolorum nostrum aliquam quaerat!',
    },
  ];

    // Establece el número máximo de elementos antes de hacer scrollable
    const maxVisibleItems = 5;
    return (
      <>
        <Typography variant="h3" component="h4" color="primary" sx={{ marginTop: '20px' }}>
          Denuncias
        </Typography>
        <Paper elevation={3} style={{ padding: 20, marginTop: 20, maxHeight: `${maxVisibleItems * 72}px`, overflowY: 'auto' }}>
          <List>
            {commentsData.map((comment) => (
              <React.Fragment key={comment.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={comment.user} src={comment.avatarUrl} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={comment.user}
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {comment.comment}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </>
    );
  };
  
  export default CommentsList;