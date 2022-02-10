import React from "react";

interface GreetingFCProps {
  enteredName: string;
  message: string;
  greetingDispatcher: React.Dispatch<{ type: string; payload: string }>;
}

export default function Greeting(props: GreetingFCProps) {
  console.log("Rending Greeting");
  const { greetingDispatcher, message, enteredName } = props;

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    greetingDispatcher({ type: "enteredName", payload: e.target.value });
    greetingDispatcher({ type: "message", payload: e.target.value });
  };

  return (
    <div>
      <input value={enteredName} onChange={onChangeName} />
      <div>{message}</div>
    </div>
  );
}
