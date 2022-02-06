import React, { useEffect } from "react";
import logging from "../config/logging";
import IPage from "../interfaces/page";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Logging ${props.name}`);
  }, [props]);

  return <p>This is the home page.</p>;
};

export default HomePage;
