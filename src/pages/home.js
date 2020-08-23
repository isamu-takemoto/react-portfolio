import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    contents: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '100 0',
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
      height: 280,
      marginBottom: 40,
    },
    topTitle: {
      fontWeight: 700,
      letterSpacing: 4,
      color: '#666',
      fontSize: '2rem',
    },
    topText: {
      textAlign: 'center',
    },
    subText: {
      color: '#999',
      margin: '14 0',
    },
  }));

function Home() {
  const classes = useStyles();

  return (
    <section className={classes.home}>
      <Container maxWidth="md" className={classes.contents}>
        <img src="/images/app_development.png" alt="devImage" className={classes.topImage} />
        <div className={classes.topText}>
          <Typography component="h2" className={classes.topTitle} >
            楽するための努力は惜しまない
          </Typography>
          <p className={classes.subText}>
              32才の時に会計業界からWebの世界にバックエンドエンジニアとして飛び込みました。
              <br />
              バックエンドだけでなく、フロントエンドもインフラもいけちゃうフルスタックエンジニアを目指しています。
          </p>
          <Button variant="outlined" className={classes.button}>
            制作物を見る
          </Button>
          <Button variant="outlined" className={classes.button}>
            メッセージを送る
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default Home;
