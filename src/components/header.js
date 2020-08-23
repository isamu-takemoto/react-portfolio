import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SimpleMenu from './menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#454545',
  },
  title: {
    flexGrow: 1,
    fontSize: 28,
    marginLeft: 30,
  },
  appBarButton: {
    margin: '0 16',
    '&:hover': {
    backgroundColor: '#4bc0c8',
},
},
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Take
          </Typography>
          <Button className={classes.appBarButton} color="inherit">HOME</Button>
          <SimpleMenu />
          <Button className={classes.appBarButton} color="inherit">BLOG</Button>
          <Button className={classes.appBarButton} color="inherit">CONTACT</Button>
          <Button className={classes.appBarButton} color="inherit"><TwitterIcon/></Button>
          <Button className={classes.appBarButton} color="inherit"><GitHubIcon/></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}