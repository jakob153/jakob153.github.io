import React, { FC, useState } from 'react';
import { GetStaticProps } from 'next';
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
  makeStyles,
  Theme,
} from '@material-ui/core';
import { AccountBox, Close, School, Work } from '@material-ui/icons';

import Education from '../components/Education';
import Experience from '../components/Experience';
import Profile from '../components/Profile';

import EducationJSON from '../data/Education.json';
import JobJSON from '../data/Jobs.json';

import { Education as EducationData, Job } from '../types';

const useStyles = makeStyles((theme: Theme) => ({
  marginTop2: {
    marginTop: theme.spacing(2),
  },
  marginRight2: {
    marginRight: theme.spacing(2),
  },
  experience: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  education: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  },
  resetPadding: {
    padding: 0,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  profileButton: {
    marginLeft: 'auto',
  },
}));

interface Props {
  education: Array<EducationData>;
  jobs: Array<Job>;
}

const IndexPage: FC<Props> = ({ education, jobs }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleDialog = () => setOpen(!open);

  const renderExperience = () => (
    <Paper className={classes.experience} variant="outlined">
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
      <Experience jobs={jobs} />
    </Paper>
  );

  const renderEducation = () => (
    <Paper className={classes.education} variant="outlined">
      <Box padding={2} display="flex" alignItems="center">
        <School className={classes.marginRight2} />
        <Typography variant="h6">Education</Typography>
      </Box>
      <Divider />
      <Education educationData={education} />
    </Paper>
  );

  const desktopView = () => (
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
  );

  const mobileView = () => (
    <>
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
    </>
  );

  // return components directly if ssr
  if (typeof window === 'undefined') {
    return desktopView();
  }

  return (
    <>
      <Hidden smDown>{desktopView()}</Hidden>
      <Hidden mdUp>{mobileView()}</Hidden>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      education: EducationJSON,
      jobs: JobJSON,
    },
  };
};

export default IndexPage;
