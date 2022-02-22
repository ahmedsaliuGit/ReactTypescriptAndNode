import React, { FC } from "react";
import { useParams } from "react-router-dom";

interface ScreenCProps {
  message: string;
}

const ScreeC: FC<ScreenCProps> = ({ message }) => {
  const { userid } = useParams();
  return (
    <React.Fragment>
      <div>{message}</div>
      <div>The user id is {userid}</div>
    </React.Fragment>
  );
};

export default ScreeC;
