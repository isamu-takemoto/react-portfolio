import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 900,
    height: 500,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      width: '80vw',
      height: '80vh',
    },
  },
  Image: {
    borderRadius: 16,
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
    width: 500,
    height: 320,
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: 350,
      height: 250,
    },
  },
  contents: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'inline',
    },
  },
  modalImage: {
    borderRadius: 16,
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.1), 0 7px 10px -5px rgba(75, 192, 200, 0.2)',
    width: 500,
    height: 320,
    cursor: 'pointer',
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      width: 250,
      height: 150,
    },
  },
  Work: {
    marginLeft: 30,
    marginTop: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(1.5),
    fontSize: 22,
    color: '#666666',
  },
  skillIcon: {
    marginTop: 10,
    marginRight: 5,
    width: 100,
    color: '#4bc0c8',
    backgroundColor: '#fff',
    border: '1px solid rgba(75, 192, 200, 0.5)',
    [theme.breakpoints.down('sm')]: {
      width: 90,
      fontSize: '0.7rem',
    },
  },
  cancel: {
    color: '#666666',
    cursor: 'pointer',
    marginLeft: 880,
    '&:hover, &.focus': {
      opacity: '0.6',
    },
    [theme.breakpoints.down('sm')]: {
      float: 'right',
    },
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let gitHubUrl = 'https://github.com/isamu-takemoto/react-portfolio';
  let contentUrl = 'https://isamu-takemoto.github.io/react-portfolio/';

  const workFlag = ['1', '2', '3', '4'];

  let skills = ['React', 'Material-UI','React router'];

  let skillsText = [
    'React.jsで静的サイト出力',
    'UIライブラリにMaterial UI',
    'react-router-domを使用したルーティング',
    'レスポンシブ対応',
    'GitHub Pagesでサイトをホスティング'];

  if (props.workFlag === workFlag[1]) {
    skills = ['Wordpress',];
    skillsText = [
      '個人ブログ用にWordpressを使用',
      'ヘッダー、グロナビ、カード表示等を管理画面でカスタマイズ',
      'HTML,CSSでデザインを微調整'];
    gitHubUrl = '';
    contentUrl = 'http://isamblog.com/';
  } else if (props.workFlag === workFlag[2])
  {
    skills = ['React','isamu'];
    skillsText = ['あ','い','う','え','お','か','き'];
  } else if (props.workFlag === workFlag[3])
  {
    skills = ['React','takemoto'];
    skillsText = ['あ','い','う','え','お'];
  }

  return (
    <div>
      <img src={props.Images} alt="" className={classes.Image} onClick={handleOpen} />
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div  className={classes.paper}>
          <div className={classes.cancel}>
            <CancelIcon onClick={handleClose} />
          </div>
          <div className={classes.contents}>
            <div className={classes.app}>
              <img src={props.Images} alt="" className={classes.modalImage} />
              <div>
                <Button color="inherit" onClick={() => {window.open(gitHubUrl);}}><GitHubIcon/></Button>
                <Button color="inherit" onClick={() => {window.open(contentUrl);}}><LinkIcon/></Button>
              </div>
              <div>
                {skills.map(skill =>
                <Chip key={skill} label={skill} variant="outlined" className={classes.skillIcon} />
                )}
              </div>
            </div>
            <div className={classes.Work}>
              <div className="header">
                <Typography className={classes.title}>
                  {props.title}
                </Typography>
                <p className="during">{props.date}</p>
              </div>
              <div className={classes.coment}>
                <p>
                  {props.summary}
                  <br />
                  
                  <br />
                  やっていることは以下の通りです。
                  <br />
                    {skillsText.map(Text =>
                      <li>{Text}</li>
                    )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}