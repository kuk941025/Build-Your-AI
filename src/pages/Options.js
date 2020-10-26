import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@/components/Accordion';
import OptionText from '@/components/OptionText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  inputText: {
    flexBasis: '30%',
    flexShrink: 0,
  },
  input: {
    flex: 1,
  },
}));
const Options = () => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <Accordion summary="te" title="title" expanded={expanded} onClick={() => setExpanded((prev) => !prev)}>
        <OptionText />
      </Accordion>
    </div>
  );
};

export default Options;
