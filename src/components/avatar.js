import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  Avatar: {
    margin: 10,
    width: 150,
    height: 150,
    transition:'1s all',
    cursor: 'pointer',
    '&:hover': {
      width: 200,
      height: 200,
      transform:'scale(1.2,1.2)',
      transition:'1s all',
    },
  },
});

export default function ImageAvatar() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="my picture" src="./images/myPic.png" className={classes.Avatar} />
    </Grid>
  );
}