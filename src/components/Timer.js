import React from 'react';
//import { useStopwatch } from 'react-timer-hook';
//import {IconButton, TextField} from "@material-ui/core";
//import Typography from "@material-ui/core/Typography"
import MyStopwatch from "./components/Timer"
import {IconButton} from "@material-ui/core";

class Timer extends React.Component {
  render (){
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>React Timetracker</h1>
        <MyStopwatch />
        <IconButton onClick={""}>Create New</IconButton>

      </div>
    );
  }
}

export default Timer;