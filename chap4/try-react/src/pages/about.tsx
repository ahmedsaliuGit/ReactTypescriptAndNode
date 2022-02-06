import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import logging from "../config/logging";
import IPage from "../interfaces/page";

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = (
  props
) => {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    logging.info(`Logging ${props.name}`);

    let number = props.match.params.number;

    if (number) {
      setMessage(`The numer is ${number}`);
    } else {
      setMessage(`No number provided!`);
    }
  }, [props]);

  return (
    <div>
      <p>This is the about page. {message}</p>;
      <Link to={"/"}>Go to home page</Link>
    </div>
  );
};

export default AboutPage;
