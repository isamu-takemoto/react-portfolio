import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContentTitle from '../components/contentTitle';
import ImageAvatar from '../components/avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
    },
    title: {
    },
    profile: {
      display: 'flex',
      height: 380,
    },
    avatar: {
      display: 'flex',
      marginRight: 50,
    },
    contents: {
      display: 'flex',
      marginTop: 30,
      width: 650,
      paddog: '0 16',
      boxShadow:'0 1px 4px 1px rgba(0, 0, 0, 0.1)',
      borderRadius: 8,
    },
    header: {
      marginLeft: 0,
      color: '#eaeaea',
      display: 'inline-block',
      backgroundColor: '#4bc0c8',
      boxShadow:'0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
      borderRadius: 8,
      padding: 16,
      width:200,
    },
    name: {
      fontSize: '1.6rem',
    },
    job: {
      fontSize: '0.9rem',
    },
    contentBody: {
      paddingLeft: 16,
    },
    career: {
      marginTop: 50,
      marginLeft: 400,
    },
    timeline: {
        position: 'relative',
        padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px ${theme.spacing(4)}px`,
        '& .entry': {
          position: 'relative',
          marginBottom: theme.spacing(4),
          '&:after': {
            content: '""',
            position: 'absolute',
            top: theme.spacing(0.25),
            left: `-${theme.spacing(4)}px`,
            height: theme.spacing(2),
            width: theme.spacing(2),
            backgroundColor: '#4bc0c8',
            boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
            borderRadius: '50%',
            zIndex: 2,
          },
        },
        '& p': {
          margin: `0`,
          color: '#666666',
        },
        '& .during': {
          color: theme.palette.text.secondary,
          marginBottom: theme.spacing(1),
        },
        '& .title': {
          fontWeight: 700,
          marginBottom: theme.spacing(1.5),
          fontSize: 18,
          color: '#666666',
        },
        '& .body': {
          background: theme.palette.background.paper,
          boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.1)',
          borderRadius: theme.spacing(1),
          padding: theme.spacing(2),
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: theme.spacing(0.75),
          height: '100%',
          width: theme.spacing(0.5),
          background: '#eaeaea',
          borderRadius: theme.spacing(0.25),
          zIndex: 1,
        },
      },
  });

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'About me',
      subtitle: '私について',
      birth: '1990/02/01',
      age: '30',
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <section>
        <ContentTitle title={this.state.title} subtitle={this.state.subtitle}/>
        <Container>
          <div className={classes.root}>
              <div className={classes.profile}>
                <div className={classes.avatar}>
                 <ImageAvatar/>
                </div>
                <div className={classes.contents}>
                  <div>
                    <div className={classes.header}>
                      <div className={classes.name}>Isamu Takemoto</div>
                      <div className={classes.job}>Web Developer</div>
                    </div>
                    <div className={classes.contentBody}>
                      <dl>
                        <dt>誕生日 / 年齢</dt>
                        <dd>
                          {this.state.birth} / {this.state.age}
                        </dd>
                      </dl>
                      <dl>
                        <dt>技術スタック</dt>
                        <dd>
                          <ul>
                            <li>PHP / Laravel</li>
                            <li>React / TypeScript / Next.js</li>
                            <li>AWS</li>
                          </ul>
                        </dd>
                      </dl>
                      <dl>
                        <dt>趣味</dt>
                        <dd>映画鑑賞、カラオケ、酒、競プロ、絵</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.career}>
                <div className={classes.header}>
                  <div className={classes.name}>Career</div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2019.09 - 2019.12</p>
                      <Typography variant="h3" className="title">
                      Web系受託開発ベンチャー / Web Developer
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        ITエンジニアとして生きていくことを決意し転職しました。
                        <br />
                        PHP/Laravelを採用したプラットフォーム開発にバックエンドエンジニアとして従事した他、新規案件のAWSアーキテクチャ設計やQA（テスト）業務を経験しました。
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2019.09 - 2019.12</p>
                      <Typography variant="h3" className="title">
                      コンサル
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        ITエンジニアとして生きていくことを決意し転職しました。
                        <br />
                        PHP/Laravelを採用したプラットフォーム開発にバックエンドエンジニアとして従事した他、新規案件のAWSアーキテクチャ設計やQA（テスト）業務を経験しました。
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2019.09 - 2019.12</p>
                      <Typography variant="h3" className="title">
                      庭
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        ITエンジニアとして生きていくことを決意し転職しました。
                        <br />
                        PHP/Laravelを採用したプラットフォーム開発にバックエンドエンジニアとして従事した他、新規案件のAWSアーキテクチャ設計やQA（テスト）業務を経験しました。
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2019.09 - 2019.12</p>
                      <Typography variant="h3" className="title">
                      食品
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        ITエンジニアとして生きていくことを決意し転職しました。
                        <br />
                        PHP/Laravelを採用したプラットフォーム開発にバックエンドエンジニアとして従事した他、新規案件のAWSアーキテクチャ設計やQA（テスト）業務を経験しました。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default withStyles(useStyles)(Profile);
