import React from "react";

interface GreetingsProps {
  name?: string;
}

interface GreetingsState {
  message: string;
}

class Greetings extends React.Component<GreetingsProps, GreetingsState> {
  constructor(props: GreetingsProps) {
    super(props);

    this.state = {
      message: `Hello world, ${props.name}`,
    };
  }
  state: GreetingsState;

  static getDerivedStateFromProps(
    props: GreetingsProps,
    state: GreetingsState
  ) {
    console.log("Rendering", props, state);
    return state;
  }

  render() {
    console.log("rendering Greeting");
    if (!this.props.name) {
      return <div>No name provided!</div>;
    } else {
      return <div>{this.state.message}</div>;
    }
  }
}

export default Greetings;
