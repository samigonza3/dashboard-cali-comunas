import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Badge } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionItem = ({ title, votes, percentage, seats, candidates }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" color="primary">{title} </Typography>
        <Typography variant="subtitle2" color="secondary">{votes} <i>({percentage})</i></Typography>
        <Typography variant='subtitle2' color="secondary">{seats} curules</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {candidates.map((candidate, index) => (
            <li key={index}>
              <a href={candidate.link} target="_blank" rel="noopener noreferrer">{candidate.name}</a>
              <Badge>{candidate.votes} <i>({candidate.percentage})</i></Badge>
            </li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
