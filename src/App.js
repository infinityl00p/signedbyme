import React, { Component } from 'react';
import ContractContainer from './ContractContainer';
import ContractList from './ContractList';

const data = {
  contracts: [
    {
      id: 1,
      title: "No alcohol",
      contract: "Stringidy Stringidy Stringidy",
      endDate: "05-19-2018",
      witness: {
        id: 1,
        name: "Avneet Brar",
        email: "avneetbrar@jizzmail.com"
      }
    },
    {
      id: 2,
      title: "No Fap",
      contract: "Fap Fap Fap",
      endDate: "05-19-2018",
      witness: {
        id: 1,
        name: "Avneet Brar",
        email: "avneetbrar@jizzmail.com"
      }
    },
    {
      id: 3,
      title: "No alcohol",
      contract: "Stringidy Stringidy Stringidy",
      endDate: "05-19-2018",
      witness: {
        id: 1,
        name: "Avneet Brar",
        email: "avneetbrar@jizzmail.com"
      }
    },
    {
      id: 4,
      title: "No alcohol",
      contract: "Stringidy Stringidy Stringidy",
      endDate: "05-19-2018",
      witness: {
        id: 1,
        name: "Avneet Brar",
        email: "avneetbrar@jizzmail.com"
      }
    }
  ]
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      contracts: data.contracts
    }
  }
  render() {
    return (
      <div className="app container">

        <div className="row my-3">
          <div className="col-md-12 text-center">
            <h1 className="title text-white">signed by me</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-6">
            <ContractContainer />
          </div>
          <div className="col-12 mx-auto my-auto col-md-4">
            <ContractList contracts={this.state.contracts} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
