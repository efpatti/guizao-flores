import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const Timer = () => {
  const [timer, setTimer] = useState(300);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval;
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <Box textAlign="center" margin="auto">
      <h2>{formatTime(timer)}</h2>
    </Box>
  );
};

export default Timer;
