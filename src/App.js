import React, { Component } from 'react';
import ContractContainer from './ContractContainer';
import ContractList from './ContractList';
import api from './utils/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contracts: []
    }
  }

  componentWillMount() {
    api.GetContracts()
      .then((response) => {
        this.setState({
          contracts: response
        })
      })
  }

  appendContract = (newContract) => {
    api.PostContract(newContract)
      .then((cid) => {
        newContract.id = cid;
        var contracts = this.state.contracts.concat(newContract);
        this.setState({ contracts })
      })
  }

  render() {
    return (
      <div className="app container">

        <div className="row my-3">
          <div className="col-md-12 text-center">
            <h1 className="title text-white">signed by me</h1>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12 col-lg-6">
            <ContractContainer handleClick={this.appendContract} />
          </div>
          <div className="col-12 mx-auto my-auto col-md-4">
            <ContractList contracts={this.state.contracts} />
          </div>
        </div>
      <p className="text-white col-md-12 pt-5 text-center">
        James Gill 2018
      </p>
      </div>
    );
  }
}

export default App;
