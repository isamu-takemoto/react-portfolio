import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContentTitle from '../components/contentTitle';
import ImageAvatar from '../components/avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  root: {
    justifyContent: 'center',
    padding: '0',
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
    },
  },
    profile: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
    avatar: {
    marginRight: 50,
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      marginTop: 10,
    },
  },
    contents: {
    display: 'flex',
    marginTop: 30,
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
    color: '#666666',
    '& dt': {
      fontWeight: 700,
    },
  },
    career: {
    marginTop: 50,
    [theme.breakpoints.up('md')]: {
      marginLeft: 400,
    },
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
      birth: '1990.02.01',
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
                        <dt>趣味</dt>
                        <dd>映画鑑賞、筋トレ、グルメ</dd>
                      </dl>
                      <dl>
                        <dt>自己紹介</dt>
                        <dd>千葉県出身のアラサーエンジニア。食品業界、庭業界を経てIT業界へ転身。
                          <br/>現在は人材系BtoBサービスの開発エンジニアとしてバック・フロントを担当。
                          <br/>休日は息子と遊んだりしています。</dd>
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
                      <p className="during">2019.10 - 現在</p>
                      <Typography variant="h3" className="title">
                        人材系ダイレクトソージングサービスの継続開発 / Engineer
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        Webサービスの開発がしたく、同社のIT部門に異動。
                        <br />
                        C#/.NET Framework,React/Redux,AES検索を採用した自グループサービス継続開発PJTの開発エンジニアとして従事。
                        <br />
                        要件定義、設計、製造、テスト、リリースの各工程を担当。
                        <br />
                        技術力の更なるレベルアップと守備範囲を広げようと日々活動しています。
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2018.04 - 2019.9</p>
                      <Typography variant="h3" className="title">
                        アウトソーシングサービス / 業務改善コンサル
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        スキルアップ、キャリア選択のしやすさを理由に現在の企業に転職。
                        <br />
                        エネルギー業界の大手電力会社や経済産業省系の補助金執行団体にて業務改善・制度設計・コンテンツ作成を担当。
                        <br />
                        クライアント領域の専門的な知識をキャッチアップし改善や設計を実施したり、
                        <br />
                        前例のない事業の制度設計や運用といった上流工程の業務を経験しました。
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2017.08 - 2018.01</p>
                      <Typography variant="h3" className="title">
                      ガーデンデザイン事務所 / 代表秘書、デザイナー補助
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        スキルアップのため、転職。
                        <br />
                        ホテルや商業施設、イベント、TV関係、個人邸等の・庭やランドスケープの設計、デザインを行う事務所で
                        <br />
                        代表のスケジュール管理や商談・会食への同行・企画・コンテンツ作成、デザイン補助（ここでPhotoshop修行）を担当。
                        <br />
                        少数精鋭であったため、様々な経験をさせていただきました。
                      </p>
                    </div>
                  </div>
                </div>
                <div className={classes.timeline}>
                  <div className="entry">
                    <div className="header">
                      <p className="during">2012.04 - 2017.08</p>
                      <Typography variant="h3" className="title">
                      食品会社 / バックオフィス
                      </Typography>
                    </div>
                    <div className="body">
                      <p>
                        某コンビニ商品を開発・製造する食品会社に新卒入社。
                        <br />
                        自社サービスである高齢者向け宅配サービスの製造部門で日々安定して製造できるようサポートしたり、
                        <br />
                        外部倉庫の原材料管理や物流手配をしたり。
                        <br />
                        定常業務以外に改善活動に注力いたしました。
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