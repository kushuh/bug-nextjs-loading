"use client";

import {useEffect, useState} from "react";

const Loading = () => {
  const [ message, setMessage ] = useState("Not mounted yet");

  useEffect(() => {
    setMessage("Mounted");
  }, []);

  return <div>{message}</div>;
};

export default Loading;
