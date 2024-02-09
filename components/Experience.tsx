import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { ChevronRight, ExpandMore } from '@mui/icons-material';

import { Job } from '../types';

interface Props {
  jobs: Job[];
}

const Experience = ({ jobs }: Props) => {
  const [expanded, setExpanded] = useState<string | false>('panel0');

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <List disablePadding>
      {jobs.map((job, index) => (
        <ListItem
          key={index}
          sx={(theme) => ({
            [theme.breakpoints.down('md')]: {
              paddingLeft: theme.spacing(1),
              paddingRight: theme.spacing(1),
            },
          })}
        >
          <Accordion
            sx={{
              flexGrow: 1,
            }}
            elevation={6}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <ListItemText
                primary={job.description}
                secondary={job.duration}
              />
            </AccordionSummary>
            <AccordionDetails
              sx={(theme) => ({
                [theme.breakpoints.down('md')]: {
                  padding: 0,
                },
              })}
            >
              <List disablePadding dense>
                {job.activities.map((activity) => (
                  <ListItem key={activity}>
                    <ListItemIcon
                      sx={(theme) => ({
                        [theme.breakpoints.down('md')]: {
                          minWidth: '40px',
                        },
                      })}
                    >
                      <ChevronRight />
                    </ListItemIcon>
                    <ListItemText primary={activity} />
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      ))}
    </List>
  );
};

export default Experience;
