import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

// import component
import GlobalData from './GlobalData';
import StateData from './StateData'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  hColor: {
    color: "black",
    fontWeight: "bolder"
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  const [globalData, setGlobalData] = useState();

  useEffect( ()=> {
    async function fatchData(){
      const apiResponse = await fetch("https://api.covid19api.com/world/total");
      const dataFromApi = await apiResponse.json()
      setGlobalData(dataFromApi)
      // console.log(dataFromApi)
    }
    fatchData()
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.hColor} variant="h4" gutterBottom>
              Global Data
            </Typography>

            <GlobalData title="Totat Conform Cases" val={globalData ? globalData.TotalConfirmed : "Loading..."} color="Black"/>
            <GlobalData title="Total Death" val={globalData ? globalData.TotalDeaths : "Loading..."} color="Red"/>
            <GlobalData title="Total Recovered" val={globalData ? globalData.TotalRecovered : "Loading..."} color="Green"/>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography className={classes.hColor} variant="h4" gutterBottom>
              Countries Data
            </Typography>

            <StateData />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}