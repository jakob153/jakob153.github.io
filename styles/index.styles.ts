import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  marginTop2: {
    marginTop: theme.spacing(2),
  },
  marginTop4: {
    marginTop: theme.spacing(4),
  },
  marginRight1: {
    marginRight: theme.spacing(1),
  },
  marginRight2: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  education: {
    [theme.breakpoints.up('md')]: {
      minHeight: '740px',
    },
  },
  paper: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  resetPadding: {
    [theme.breakpoints.down('md')]: {
      padding: 0,
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  flexGrow: {
    flexGrow: 1,
  },
  profileButton: {
    marginLeft: 'auto',
  },
  mobileGithubLink: {
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(1),
    },
  },
}));
