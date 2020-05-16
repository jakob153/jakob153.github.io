import React, { useState } from 'react';
import classnames from 'classnames';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Hidden,
  Paper,
  Typography,
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { blue, pink } from '@material-ui/core/colors';
import { AccountBox, Close, GitHub, School, Work } from '@material-ui/icons';
import Head from 'next/head';

import EducationData from '../data/education.json';
import JobsData from '../data/jobs.json';

import Education from '../components/Education';
import Experience from '../components/Experience';
import Profile from '../components/Profile';

const useStyles = makeStyles((theme: Theme) => ({
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

const IndexPage = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleDialog = () => setOpen(!open);

  const renderExperience = () => (
    <Paper className={classnames(classes.paper, classes.education)} variant="outlined">
      <Box padding={2} display="flex" alignItems="center">
        <Work className={classes.marginRight2} />
        <Typography variant="h6">Work Experience</Typography>
        <Hidden mdUp>
          <Button
            variant="contained"
            onClick={handleDialog}
            className={classes.profileButton}
            startIcon={<AccountBox />}
          >
            Profile
          </Button>
        </Hidden>
      </Box>
      <Divider />
      <Experience jobs={JobsData} />
    </Paper>
  );

  const renderEducation = () => (
    <Paper className={classnames(classes.paper, classes.marginTop2)} variant="outlined">
      <Box padding={2} display="flex" alignItems="center">
        <School className={classes.marginRight2} />
        <Typography variant="h6">Education</Typography>
      </Box>
      <Divider />
      <Education educationData={EducationData} />
    </Paper>
  );

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: blue[200],
      },
      secondary: {
        main: pink[200],
      },
      background: {
        default: '#121212',
        paper: '#333',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Jakob Günay | CV</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <CssBaseline />
      <Hidden smDown>
        <Container className={classes.marginTop2}>
          <Grid container spacing={4}>
            <Grid item md={4}>
              <Profile />
            </Grid>
            <Grid item md={8}>
              {renderExperience()}
              {renderEducation()}
            </Grid>
          </Grid>
        </Container>
      </Hidden>
      <Hidden mdUp>
        {renderExperience()}
        {renderEducation()}
        <Dialog fullScreen open={open} onClose={handleDialog}>
          <DialogTitle>Profile</DialogTitle>
          <IconButton className={classes.closeButton} onClick={handleDialog}>
            <Close />
          </IconButton>
          <DialogContent className={classes.resetPadding}>
            <Profile />
          </DialogContent>
        </Dialog>
      </Hidden>
    </ThemeProvider>
  );
};

export default IndexPage;
