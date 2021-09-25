import './App.css';
import React from "react";


import downloadPayslip from "./downloader";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <URLForm/>
      </header>
    </div>
  );
}

class URLForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  render() {
    return (
        <div>
          <p>
            Enter the URL of one of your existing payslips
          </p>
          <div className="InputDiv">
            <input onChange={this.handleChange}/>
            <button onClick={() => downloadPayslip(this.state.url)}>GO</button>
          </div>
        </div>
    );
  }

}


export default App;
