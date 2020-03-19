import React, { FC } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

import { Education as IEducation } from "../interfaces/Education";

interface Props {
  educationData: IEducation;
}

export const Education: FC<Props> = ({ educationData }) => {
  return (
    <List disablePadding>
      {educationData.map(edu => (
        <ListItem key={edu.id} divider>
          <ListItemText primary={edu.description} secondary={edu.duration} />
        </ListItem>
      ))}
    </List>
  );
};

export default Education;
