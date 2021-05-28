import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

import App from './App'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));
let rules = ["section 19", "Rule 4 of the Adjudication Rules", "Rule 41", "Section 15HB", "Section 15 HB", "Section 15HB of the SEBI Act", "section 15J of the SEBI Act", "Section 15J of the SEBI Act", "Section 15J", "section 15I of the SEBI Act", "section 28A of the SEBI Act 1992", "SECTION 15", "Regulations 131", "PIT Regulations 1992", "PIT Regulations 2015", "Section 15", "Section 15A", "Regulation 12 of PIT Regulations 2015", "Section 15 Ab of the Act", "the PIT Regulations 1992", "Regulation 135 of PIT Regulations 1992", "Regulation 136", "Section 15Ab of the Act", "Section 15Ab", "Section 15J of SEBI Act", "Section 15 Ab of SEBI Act", "section 15 I of SEBI Act", "section 15", "section 15Ab of the SEBI Act", "section 15J of SEBI Act", "section 15I", "SECTION 15I OF SECURITIES AND EXCHANGE BOARD OF INDIA ACT 1992", "Section 12A", "SEBI Act 1992", "Section 12Ad", "section 15Ab of SEBI Act", "section 15G of SEBI Act", "Section 15I 2", "Rule 5", "the SEBI Act 1992", "Rule 43", "Regulation 133 of PIT Regulations", "Section 15Ab of the SEBI Act 1992", "Section 21", "Section 21 of SCR Act 1956", "Regulation 121", "Section 23Aa", "Section 15HB of the SEBI Act 1992", "Section 15I of the SEBI Act 1992", "the SCR Act 1956", "the Companies Act 1956", "Section 23E", "Section 15HB of SEBI Act", "Regulation 72", "section 15HB", "section 15A", "SEBI PFUTP Regulations 2003", "Regulations 3", "section 15I of SEBI Act", "Section 15HA", "the Finance Act 2017", "the PFUTP Regulations 2003", "section 11", "Regulation 29 2", "the SAST Regulations 2011", "Regulation 13", "Section 19 of the SEBI Act", "Regulation 13 6", "Section 15Ab of the SEBI Act", "the SEBI Prohibition of Insider Trading Regulations 1992", "section 15J of the SEBI Act 1992", "SAST Regulations 2011", "Section 15J of SEBI Act 1992", "Regulation 134", "Regulation 13 3", "Section 15Ab of SEBI Act", "Section 15I of the SEBI Act", "Regulation 111", "Regulation 71", "Regulations 71", "the SAST Regulations 1997", "Section 15I of SEBI Act 1992", "subregulation 2", "Regulation 71A", "section 15I of the SEBI Act 1992", "Clause 1.2", "section 12", "section 15HB of the SEBI Act", "the Rule 6 of the Adjudication Rules", "SECTION 15I OF THE SECURITIES AND EXCHANGE BOARD OF INDIA ACT 1992", "Section 19", "Regulation 293", "Section 15Ab of SEBI Act 1992", "Section 15I", "Section 15I of SEBI Act", "Rule 47", "the PIT Regulations 2015", "section 15I of Securities and Exchange Board of India Act 1992 hereinafter", "PIT Regulations 1992 and SAST Regulations 2011", "section 15Ab", "Rule 52", "Regulations 71 of Takeover Regulations", "Regulation 71 of Takeover Regulations", "Section 12Ad & e of SEBI Act", "Regulations 3a", "section 2", "the Companies Act 1956 1 of 1956", "section 307", "subsection 11", "section 372", "section 2 of the Monopolies and Restrictive Trade Practices Act", "Section 12", "SECTION 15I 2 OF SECURITIES AND EXCHANGE BOARD OF INDIA ACT 1992", "section 15Ab of SEBI Act 1992", "Regulation 131", "Rule 5 2", "Rule 6 of the Adjudication Rules", "Section 11C3", "section 21", "Regulation 133", "Regulation 135 of PIT Regulations", "the Takeover Regulations 1997", "Regulation 134A", "Regulation 135", "Regulation 292", "Regulation 81", "Section 15 Ab", "Section 15I of the Securities and Exchange Board of India Act 1992", "Regulation 136 of PIT Regulations 1992", "Sections 15", "section 15I of the Securities and Exchange Board of India Act 1992", "section 15 I of the SEBI Act", "Section 15I2", "section 15J", "Section 15 Ab of the SEBI Act", "SEBI PIT Regulations 1992", "Section 15I of the Securities and Exchange Board of India Act", "the PIT Regulations and Regulation 291", "the PIT Regulations and Regulation 292", "Regulation 12", "section 15J of SEBI Act 1992", "Regulation 3", "the Companies Act 2013", "section 15Ab of the SEBI Act 1992", "Section 11", "Section 16", "Regulations 292", "Section 15Ab of", "Regulations 134", "Regulation 13 1", "Regulation 29", "SEBI PIT Regulations 2015", "Section 15G of the SEBI Act", "Rule 4", "Section 2", "section 23", "Regulation 2", "Regulation 71 of SAST Regulations", "Section 23I", "Regulation 132A", "Regulation 136 of PIT Regulations", "Section 23H", "Section 23J", "Section 23", "\u201cPIT Regulations 2015\u201d", "Rule 3", "Regulation 13 4", "Regulations 134A", "section 15HB of SEBI Act", "Section 23A", "the Depositories Act 1996", "Regulations 291", "the SEBI Prohibition of Insider Trading Regulations 2015", "the SAST Regulations and Regulation 131", "Regulation 31", "Regulation 13 5", "Section 11C2", "section 15Aa", "the SAST Regulations and Regulation 133", "Section 2i", "section 2i", "Section 13", "Section 18"]

function renderRow(props) {
  const { index, style, texts } = props;
  let ll = "/rule:" + index
  return (
    <ListItem button style={style} key={index }  onClick={()=> window.location.href=ll}>
      <ListItemText primary={`${rules[index]}`} />
    </ListItem>
  );
}


renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={1000} itemSize={46} itemCount={rules.length}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
