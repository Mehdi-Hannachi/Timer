// const { Component } = require("react");
import { Component } from "react";
import Profil from "./components/Profil/Profil";

class App extends Component {
  state = {
    fullName: "Mehdi Hannachi",
    show: false,
  
  };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    console.log("Mounting App component");
  }

  componentDidUpdate() {
    console.log("Updating App component");
  }

  componentWillUnmount() {
    console.log("Destruction App component");
  }

  render() {
    return (
      <>
        <h1>Class Component</h1>

        <button onClick={this.toggle}>
          {this.state.show ? "Hide" : "Show"}
        </button>

        {this.state.show ? <Profil fullName={this.state.fullName} /> : null}
      </>
    );
  }
}

export default App;
