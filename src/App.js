import React, { Component } from 'react';
import moment from 'moment';
import ContractContainer from './ContractContainer';
import ContractList from './ContractList';
import api from './utils/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contracts: [],
      activeContract: {
        endDate: moment(),
        title: "",
        name: "",
        contractString: "",
        signature: "",
        witnessName: "",
        witnessEmail: ""
      }
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

  loadContract = (cid) => {
    const contract = this.state.contracts.filter((contract) => {
      return(contract.cid === cid)
    });

    const activeContract = {
      endDate: moment(contract[0].endDate),
      title: contract[0].title,
      name: contract[0].name,
      contractString: contract[0].contractString,
      signature: contract[0].signature,
      witnessEmail: contract[0].witnessEmail,
      witnessName: contract[0].witnessName
    }

    this.setState({ activeContract })
  }

  appendContract = (newContract) => {
    api.PostContract(newContract)
      .then((cid) => {
        newContract.id = cid;
        var contracts = this.state.contracts.concat(newContract);
        this.setState({ contracts, activeContract: {
          endDate: moment(),
          title: "",
          name: "",
          contractString: "",
          signature: "",
          witnessName: "",
          witnessEmail: ""
        }})
      })
  }

  handleInputChange = (value, inputType) => {
    const activeContract = this.state.activeContract;
    switch(inputType) {
      case "title":
        activeContract.title = value;
        this.setState({ activeContract });
        break;

      case "name":
        activeContract.name = value;
        this.setState({ activeContract });
        break;

      case "contractString":
        activeContract.contractString = value;
        this.setState({ activeContract });
        break;

      case "signature":
        activeContract.signature = value;
        this.setState({ activeContract });
        break;

      case "witnessName":
        activeContract.witnessName = value;
        this.setState({ activeContract });
        break;

      case "witnessEmail":
        activeContract.witnessEmail = value;
        this.setState({ activeContract });
        break;

      default:
        break;
    }
  }

  handleDateChange = (date) => {
    const activeContract = this.state.activeContract;
    activeContract.endDate = date;

    this.setState({ activeContract })
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
            <ContractContainer
              handleClick={this.appendContract}
              activeContract={this.state.activeContract}
              handleDateChange={this.handleDateChange}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div className="col-12 mx-auto my-auto col-md-4">
            <ContractList
              contracts={this.state.contracts}
              handleClick={this.loadContract}
            />
          </div>
        </div>
      <p className="text-white col-md-12 pt-5 text-center">
      © James Gill 2018
      </p>
      </div>
    );
  }
}

export default App;
