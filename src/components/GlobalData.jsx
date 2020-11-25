import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(16),
    },
  },
  typo: {
    width: '100%',
    maxWidth: 500,
    marginTop: 25,

  }
}));

export default function GlobalData(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className={classes.typo} style={{color: props.color}}>
          <Typography variant="h4" gutterBottom>
            <NumberFormat value={props.val} displayType={'text'} thousandSeparator={true}/>
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {props.title}
          </Typography>
        </div>
      </Paper>
    </div>
  );
}