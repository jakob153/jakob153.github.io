import React, { useState } from "react";
import classnames from "classnames";
import {
  AppBar,
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
  Link,
  Toolbar,
  Typography,
  ThemeProvider,
  createMuiTheme,
  CssBaseline
} from "@material-ui/core";
import { AccountBox, Close, GitHub, School, Work } from "@material-ui/icons";
import Head from "next/head";

import EducationData from "../data/education.json";
import JobsData from "../data/jobs.json";

import Experience from "../components/experience";
import Profile from "../components/profile";
import Education from "../components/education";

import { useStyles } from "../styles/index.styles";

const IndexPage = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClose = () => setOpen(false);

  const renderExperience = () => (
    <Paper
      className={classnames(classes.paper, classes.education)}
      variant="outlined"
    >
      <Box padding={2} display="flex" alignItems="center">
        <Work className={classes.marginRight2} />
        <Typography variant="h6">Work Experience</Typography>
      </Box>
      <Divider />
      <Experience jobs={JobsData} />
    </Paper>
  );

  const renderEducation = () => (
    <Paper
      className={classnames(classes.paper, classes.marginTop2)}
      variant="outlined"
    >
      <Box padding={2} display="flex" alignItems="center">
        <School className={classes.marginRight2} />
        <Typography variant="h6">Education</Typography>
      </Box>
      <Divider />
      <Education educationData={EducationData} />
    </Paper>
  );

  const renderGithubLink = () => (
    <Box display="flex" justifyContent="flex-end" marginTop={2}>
      <Link
        color="inherit"
        href="https://github.com/jakob153/jakob153.github.io"
        target="_blank"
      >
        <Box display="flex" alignItems="center">
          <GitHub className={classes.marginRight1} />
          <Typography align="right">Source Code</Typography>
        </Box>
      </Link>
    </Box>
  );

  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
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
          {renderGithubLink()}
        </Container>
      </Hidden>
      <Hidden mdUp>
        <AppBar color="inherit" position="sticky">
          <Toolbar>
            <Typography variant="h6" className={classes.flexGrow}>
              CV
            </Typography>
            <Button variant="contained" onClick={() => setOpen(true)}>
              <AccountBox className={classes.marginRight1} />
              Profile
            </Button>
          </Toolbar>
        </AppBar>
        {renderExperience()}
        {renderEducation()}
        {renderGithubLink()}
        <Dialog fullScreen open={open} onClose={handleClose}>
          <DialogTitle>Profile</DialogTitle>
          <IconButton className={classes.closeButton} onClick={handleClose}>
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
