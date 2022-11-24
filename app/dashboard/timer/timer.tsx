'use client';

import {Button} from '@mui/material';
import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle =() =>{
    setIsActive(curr => !curr);
  }

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(()=>{
    let interval = null;
    if(isActive){
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000);
    }else if(!isActive && seconds !== 0){
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  },[isActive, seconds]);

  return(
    <div>
      <div>
        {seconds}초
      </div>
      <div>
        <Button onClick={toggle}>
          {isActive ? "Pause" : "Start"}
        </Button>
        <Button onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  )
}

export default Timer;