import { List, ListItem, ListItemText } from '@mui/material';

import { Education as EducationData } from '../types';

interface Props {
  educationData: EducationData[];
}

export const Education = ({ educationData }: Props) => {
  return (
    <List disablePadding>
      {educationData.map((edu, index) => (
        <ListItem key={index} divider>
          <ListItemText primary={edu.description} secondary={edu.duration} />
        </ListItem>
      ))}
    </List>
  );
};

export default Education;
