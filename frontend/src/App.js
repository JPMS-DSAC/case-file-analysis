import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Chip, Box } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { borders } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import StorageIcon from '@material-ui/icons/Storage';
import GavelIcon from '@material-ui/icons/Gavel';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  NavigateNextIcon: {
    margin: theme.spacing.unit, // You might not need this now
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },


}));
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}



export default function FullWidthGrid() {
  const classes = useStyles();

  const [rules, setRules] = useState([]);
  const [shouldFetch, setShouldFetch] = useState(true);

  const [offset, setOffSet] = useState(0)
  const [ruleID, setruleID] = useState(0)

  let { idxx } = useParams();
  let resStr = idxx.substring(1); 



  const [count, setCount] = useState(0)

  function useUpdateCases(offset, ruleID, shouldFetch, setShouldFetch) {
    const [cases, setCases] = useState([]);

    useEffect(() => {
      if (shouldFetch == true) {



        // console.log('off',offset);
          
        var api = 'http://10.4.20.158:5000/cases_react/' + resStr + '/' + offset;
        fetch(api, { "method": "get" })
          .then(res => res.json()).then(res => setCases(res), setShouldFetch(false))
      }
    });

    return cases

  }

  // const [cases , setCases] = useState([]);


  var cases = (useUpdateCases(offset, 0, shouldFetch, setShouldFetch));

  const buttonStyles = {
    label: {
      flexDirection: "column"
    }
  };

  const imageStyles = { root: { width: 64, height: 64, marginBottom: 0 } };

  const Image = withStyles(imageStyles)(({ classes }) =>
    <NavigateNextIcon classes={classes} />
  );
  const Image1 = withStyles(imageStyles)(({ classes }) =>
    <NavigateBeforeIcon classes={classes} />
  );
  const Image2 = withStyles(imageStyles)(({ classes }) =>
    <StorageIcon classes={classes} />
  );
  const Image4 = withStyles(imageStyles)(({ classes }) =>
    <GavelIcon classes={classes} />
  );
  const Image3 = withStyles(imageStyles)(({ classes }) =>
    <PersonIcon classes={classes} />
  );
  const Image5 = withStyles(imageStyles)(({ classes }) =>
    <GroupIcon classes={classes} />
  );



  function link(offset, index) {
    if (cases != undefined && JSON.stringify(cases) != "[]") {
      var number = (cases[index]['case_number']);
      var ll = "http://10.4.20.158:5000/case_analysis/" +  number + "/"
      return <a href={ll} > {cases[index]['title']} </a>;
    }
  }
  function showPenalty(index) {
    if (cases != undefined && JSON.stringify(cases) != "[]") {
      if (cases[index]['penalty'] != "")
        return <p> Penalty: {cases[index]['penalty']} </p>;

    }
  }
  function Welcome(index) {
    // console.log("Inside welcome method")
    // console.log("Got cases: " ,cases)
    if (cases != undefined && JSON.stringify(cases) != "[]") {
      return <p> {cases[index]['display_content']} </p>;
    }

  }
  function displayRule(ruleId) {
    if (cases != undefined && JSON.stringify(cases) != "[]") {
      const styleObj = {
        color: "white",
    }
      return  <a style={styleObj} href ="https://www.sebi.gov.in/acts/act15ac.html">
        
       <p color="white" > Regulation 15G

      *15G. Penalty for insider trading.—If any insider who,— (i) either on his own behalf or on behalf of any other person, deals in securities of a body corporate listed on any stock exchange on the basis of any unpublished price sensitive information; or (ii) communicates any unpublished price sensitive informa­tion to any person, with or without his request for such informa­tion except as required in the ordinary course of business or under any law; or (iii) counsels, or procures for any other person to deal in any securities of any body corporate on the basis of unpub­lished price sensitive information, shall be liable to a penalty 1[of twenty-five crore rupees or three times the amount of profits made out of insider trading, whichever is higher</p>
      </a>;
    }
  }


  return (
    
    <div className={classes.root}>
     
      <Box display="flex">

      </Box>



      <Grid container spacing={1}>
        <Grid item sm={4}  >
          <Box border={1} height={1} p={0.8} m={0.8}>
            {link(offset, 0)} {Welcome(0)} {showPenalty(0)}
          </Box>

        </Grid>
        <Grid item sm={4}  >
          <Box border={1} height={1} p={0.8} m={0.8}>
            {link(offset, 1)} {Welcome(1)} {showPenalty(1)}
          </Box>

        </Grid>
        <Grid item sm={4}  >
          <Box border={1} height={1} p={0.8} m={0.8}>
            {link(offset, 2)} {Welcome(2)} {showPenalty(2)}
          </Box>

        </Grid>
        <Grid item sm={4}  >
          <Box border={1} height={1} p={0.8} m={0.8}>
            {link(offset, 3)} {Welcome(3)} {showPenalty(3)}
          </Box>

        </Grid><Grid item sm={4}  >
          <Box border={0} color="white" bgcolor="secondary.main" height={1} p={0.8} m={1}>
            {displayRule(1)}
          </Box>

        </Grid><Grid item sm={4}  >
          <Box border={1} height={1} p={0.8} m={0.8}>
            {link(offset, 4)} {Welcome(4)} {showPenalty(4)}
          </Box>

        </Grid><Grid item sm={4}  >
          <Box border={1} height={1} p={0.8} m={0.8}>
            {link(offset, 5)} {Welcome(5)} {showPenalty(5)}
          </Box>

        </Grid>
        <Grid item sm={4}  >
          <Box border={1} height={1} p={0.8} m={0.8}>
            {link(offset, 6)} {Welcome(6)} {showPenalty(6)}
          </Box>

        </Grid>
        <Grid item sm={4}  >
          <Box border={1} height={1} p={0.8} m={0.8}>
            {link(offset, 7)} {Welcome(7)} {showPenalty(7)}
          </Box>

        </Grid>



      </Grid>
      <Box flexGrow={1} display="flex" flexDirection="row">
        <Box my={2} py={2}>
          <Button onClick={() => { if (offset > 1) { setOffSet(offset - 8) }; console.log('count', offset); setShouldFetch(true); console.log(shouldFetch) }} dense color="primary" >
            <Image1 />   Previous
      </Button>
        </Box>

        <Box my={2} py={2}>
          <Button onClick={() => { if (offset < 88) { setOffSet(offset + 8); setShouldFetch(true); if (cases == []) { setOffSet(offset - 8); }; console.log('count', offset); } console.log(shouldFetch) }} dense color="primary" >
            <Image />Next
      </Button>

        </Box>



        <Box my={2} py={2}>
          <Button onClick={() => openInNewTab("http://127.0.0.1:5000/lawyer/1/" + (offset / 8 + 1) + "/")} >
              <Image3 />  Lawyer's Perspective
      </Button>

        </Box>
        <Box my={2} py={2}>
          <Button onClick={() => openInNewTab("http://127.0.0.1:5000/judge/1/" + (offset / 8 + 1) + "/")} >
            <Image4 /> Judge's Perspective
      </Button>

        </Box>
        <Box my={2} py={2}>
            <Button onClick={() => openInNewTab("http://127.0.0.1:5000/sebi/1/" + (offset / 8 + 1) + "/")} >
              <Image5 /> SEBI's Perspective

      </Button>

          </Box>
        
          <Box my={2} py={2} alignContent="flex-end" >
            <Button dense color="primary" >
              <Image2 /> Showing {offset} - {offset + 8}
            </Button>
          </Box>

        </Box>
    </div>


  );
}
