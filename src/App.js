import "./styles.css";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    //! M-1
    console.log("constructor");
    super(props);
    // console.log(typeof(props.number));
    this.state = { counter: props.number, dogInfo: {} };
  }

  static getDerivedStateFromProps(props, state) {
    //M-2  | U-1
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // U-2, called when there is new props and state
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    // M-3 | U-3
    console.log("render");
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Inc
        </button>
        <p>{JSON.stringify(this.state.dogInfo)}</p>
      </>
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // U-4
    // it will keep the old state and props when new comp loaded
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps) {
    //     U-5
    // // Typical usage (don't forget to compare props):
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
    console.log("componentDidUpdate");
  }

  componentDidMount() {
    // M-4
    console.log("componentDidMount");
    fetch("https://dog.ceo/api/breeds/list/all").then((res) => {
      res.json().then((res) => {
        this.setState(function (oldstate) {
          return {
            ...oldstate,
            dogInfo: res
          };
        });
      });
    });
    console.log("now Updating...");
  }

  // console.log("updating....");

  componentWillUnmount() {
    // here we will clear the data
    console.log("componentWillUnmount");
    delete this.state;
  }
}

class App extends Component {
  state = { show: true };
  render() {
    return (
      <>
        <h1>Arvind</h1>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          ShowCounter
        </button>
        {this.state.show ? <Counter number={12} /> : null}
      </>
    );
  }
}

export default App;
