/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

// https://docs.web3js.org/libdocs/ABI

import { memo } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Components from './components';

const MyWeb3APITest = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="ConstructorAPI"
        >
          <Typography>Prototype</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Components.ConstructorAPI />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="ABI"
        >
          <Typography>ABI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Components.ABI />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accounts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Components.Accounts />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Contract</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Components.Contract />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>ENS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Components.ENS />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default memo(MyWeb3APITest);