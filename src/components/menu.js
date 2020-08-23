import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBarButtonMenu: {
      margin: '0 16',
      '&:hover': {
      backgroundColor: '#4bc0c8',
  },
  },
  }));

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.appBarButtonMenu} color="inherit">
        PORTFOLIO
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>About me</MenuItem>
        <MenuItem onClick={handleClose}>Skills</MenuItem>
        <MenuItem onClick={handleClose}>Portfolio</MenuItem>
      </Menu>
    </div>
  );
}