import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SimpleMenu from './menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import TemporaryDrawer from './drawer';

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
    '&:hover, &.focus': {
    backgroundColor: '#4bc0c8',
},
},
link: {
    color: 'inherit',
    textDecoration: 'none',
},
item: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
},
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const twitterUrl = 'https://twitter.com/isamudesu_';
  const gitHubUrl = 'https://github.com/isamu-takemoto';
  const blogUrl = 'http://isamblog.com/';

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>Take.dev</Link>   
          </Typography>
           <TemporaryDrawer />
           <div className={classes.item}>
             <Link to="/" className={classes.link}><Button className={classes.appBarButton} color="inherit">HOME</Button></Link>
             <SimpleMenu />
             <Button className={classes.appBarButton} color="inherit" onClick={() => {window.open(blogUrl);}}>BLOG</Button>
             <Link to="/contactForm" className={classes.link}><Button className={classes.appBarButton} color="inherit">CONTACT</Button></Link>
             <Button className={classes.appBarButton} color="inherit" onClick={() => {window.open(twitterUrl);}}><TwitterIcon/></Button>
             <Button className={classes.appBarButton} color="inherit" onClick={() => {window.open(gitHubUrl);}}><GitHubIcon/></Button>
           </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}