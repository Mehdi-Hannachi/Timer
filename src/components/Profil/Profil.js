import React, { Component } from "react";
class Profil extends Component {
  state = {
    timer: 0,
  };

  componentDidMount() {
    console.log("Mounting Profile component ");

    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Updating Profile component");
  }

  componentWillUnmount() {
    console.log("Destruction Profile component");
  }

  render() {
    return (
      <div>
        <h1>{this.props.fullName}</h1>

        <h2>{this.state.timer}</h2>
      </div>
    );
  }
}

export default Profil;
