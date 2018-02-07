import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class ContractContainer extends Component {
  constructor() {
    super();

    this.state = {
      endDate: moment(),
      title: "",
      name: "",
      contractString: "",
      signature: "",
      witnessName: "",
      witnessEmail: ""
    }
  }

  handleClick = (e) => {
    this.props.handleClick({
      title: this.state.title,
      name: this.state.name,
      signature: this.state.signature,
      contractString: this.state.contractString,
      endDate: moment(this.state.endDate).format('YYYY-MM-DD'),
      witnessName: this.state.witnessName,
      witnessEmail: this.state.witnessEmail
    })
  }

  handleDateChange = (date) => {
    this.setState({
      endDate: date
    })
  }

  handleInputChange = (value, inputType) => {
    switch(inputType) {
      case "title":
        this.setState({
          title: value
        });
        break;

      case "name":
        this.setState({
          name: value
        });
        break;

      case "contractString":
        this.setState({
          contractString: value
        });
        break;

      case "signature":
        this.setState({
          signature: value
        });
        break;

      case "witnessName":
        this.setState({
          witnessName: value
        });
        break;

      case "witnessEmail":
        this.setState({
          witnessEmail: value
        });
        break;

      default:
        break;
    }
  }

  render() {
    return(
      <div className="contract bg-white mb-">

          <div className="col-md-12 text-center pt-2">
            <h2>
              <input
                className="light-blue text-center w-100"
                type="title"
                placeholder="Challenge Title"
                value={this.state.title}
                onChange={(e) => { this.handleInputChange(e.target.value, "title")}}
              />
            </h2>
          </div>

          <div className="contract-text col-md-12 py-2">
            I
            <input
              className="text-center w-40 mx-2 underline"
              type="name"
              placeholder="Your Name"
              value={this.state.name}
              onChange={(e) => { this.handleInputChange(e.target.value, "name") }}
            />
            agree to:
          </div>

          <div className="p-3">
            <textarea
              className="notes w-100"
              rows="6"
              value={this.state.contractString}
              onChange={(e) => { this.handleInputChange(e.target.value, "contractString") }}
            />
          </div>

          <div className="row px-2 mb-2">
            <div className="col-md-5">
              Completion Date:
            </div>
            <div className="col-md-3 underline">
              <DatePicker
                selected={this.state.endDate}
                onChange={this.handleDateChange}
              />
            </div>
          </div>

          <div className="contract-signature mt-2 h-25">

            <div className="row py-3">
              <div className="col-md-6 col-12">
                <input
                  className="text-center mx-2 underline sign"
                  type="name"
                  placeholder="Your Name"
                  value={this.state.name}
                  onChange={(e) => { this.handleInputChange(e.target.value, "name") }}
                />
              </div>
              <div className="col-md-6 col-12">
                <input
                  className="text-center mx-2 underline signature sign"
                  type="signature"
                  placeholder="Signature"
                  onChange={(e) => { this.handleInputChange(e.target.value, "signature") }}
                />
              </div>
            </div>

            <div className="row py-3">
              <div className="col-md-6 col-12">
                <input
                  className="text-center mx-2 underline sign"
                  type="witness-name"
                  placeholder="Witness Name"
                  onChange={(e) => { this.handleInputChange(e.target.value, "witnessName") }}
                />
              </div>
              <div className="col-md-6 col-12">
                <input
                  className="text-center mx-2 underline sign"
                  type="witness-email"
                  placeholder="Witness Email"
                  onChange={(e) => { this.handleInputChange(e.target.value, "witnessEmail") }}
                />
              </div>
            </div>
          </div>

          <div className="row mt-2 mb-5">
            <div className="col-md-12 text-center">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={this.handleClick}
              >
                Sign
              </button>
            </div>
          </div>

      </div>
    );
  }
}

export default ContractContainer;