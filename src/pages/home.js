import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  contents: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '100 0',
    height: '100vh',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
    },
  },
  home: {
    backgroundColor:'#f7fcfd',
  },
  button: {
    color: '#4bc0c8',
    backgroundColor: '#fff',
    margin: 8,
    border: '1px solid rgba(75, 192, 200, 0.5)',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
    '&:hover': {
      border: '1px solid #4bc0c8',
      backgroundColor: '#fff',
},
  },
  topImage: {
    height: 330,
    marginBottom: 10,
    marginTop:110,
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
  },
  topTitle: {
    fontWeight: 700,
    letterSpacing: 4,
    color: '#666',
    fontSize: '4rem',
    fontFamily: 'Caveat',
    [theme.breakpoints.down('sm')]: {
      fontWeight: 600,
      fontSize: '2rem',
    },
  },
  topText: {
    textAlign: 'center',
  },
  subText: {
    color: '#999',
    margin: '14 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  link: {
      color: 'inherit',
      textDecoration: 'none',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <section className={classes.home}>
      <Container maxWidth="md" className={classes.contents}>
        <img src="/images/desk.png" alt="devImage" className={classes.topImage} />
        <div className={classes.topText}>
          <Typography component="h2" className={classes.topTitle} >
            I'm Web Developer
          </Typography>
          <p className={classes.subText}>
              29才の時にWebの世界にバックエンドエンジニアとして飛び込みました。
              <br />
              バックエンドだけでなく、フロントエンドもインフラもいけちゃうフルスタックエンジニアを目指しています。
          </p>
          <Link to="/works" className={classes.link}><Button variant="outlined" className={classes.button}>
            制作物を見る
          </Button>
          </Link>
          <Link to="/contactForm" className={classes.link}><Button variant="outlined" className={classes.button}>
            メッセージを送る
          </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Home;