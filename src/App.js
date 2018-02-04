import React, { Component } from 'react';
import ContractContainer from './ContractContainer';

class App extends Component {
  render() {
    return (
      <div className="app container">

        <div className="row my-3">
          <div className="col-md-12 text-center">
            <h1 className="title text-white">signed by me.</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <ContractContainer />
          </div>
          <div className="col-md-6">

          </div>
        </div>

      </div>
    );
  }
}

export default App;
