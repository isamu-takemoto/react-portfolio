import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import ContentTitle from '../components/contentTitle';
import Container from '@material-ui/core/Container';
import SimpleModal from '../components/modal';

const useStyles = theme => ({
    contents: {
      display:'flex',
      height: 430,
      width: 1200,
      marginTop: 30,
      flexWrap: 'wrap',
      [theme.breakpoints.down('sm')]: {
        width: '100vw',
        display: 'inline',
      },
    },
    app: {
      height: 430,
      marginTop: 30,
      marginRight: 20,
      display: 'block',
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
        height: 300,
      },
      '&:hover': {
        opacity: '0.8',
        transform: 'translateY(-1em)',
        transition: 'transform 0.3s ease-in-out',
      },
    },
    chip: {
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
    Work: {
      height: 430,
      marginTop: 30,
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
    },
  });

class Works extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Works',
      subtitle: '実績',
      workFlag: ['1', '2', '3', '4'],
      portfolioImg: './images/portfolio.png',
      portfolioTitle: "Take's Portfolio",
      portfolioDate: '2020.08',
      portfolioSummary: 'React製のポートフォリオサイトです。',
      blogImg: './images/blog.png',
      blogTitle: "isamblog",
      blogDate: '2019.06',
      blogSummary: '情報発信用の個人ブログです。',
    };
  }
  
  render() {
    const { classes } = this.props;

    return (
      <section>
        <ContentTitle title={this.state.title} subtitle={this.state.subtitle}/>
        <Container>
          <div className={classes.contents}>
            <div className={classes.app}>
              <SimpleModal Images={this.state.portfolioImg} workFlag={this.state.workFlag[0]} title={this.state.portfolioTitle} date={this.state.portfolioDate} summary={this.state.portfolioSummary}/>
            </div>
            <div className={classes.app}>
              <SimpleModal Images={this.state.blogImg} workFlag={this.state.workFlag[1]} title={this.state.blogTitle} date={this.state.blogDate} summary={this.state.blogSummary}/>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default withStyles(useStyles)(Works);