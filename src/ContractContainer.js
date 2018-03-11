import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class ContractContainer extends Component {
  handleClick = (e) => {
    this.props.handleClick({
      title: this.props.activeContract.title,
      name: this.props.activeContract.name,
      signature: this.props.activeContract.signature,
      description: this.props.activeContract.description,
      endDate: moment(this.props.activeContract.endDate).format('YYYY-MM-DD'),
      witnessName: this.props.activeContract.witnessName,
      witnessEmail: this.props.activeContract.witnessEmail
    })
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
                value={this.props.activeContract.title}
                onChange={(e) => { this.props.handleInputChange(e.target.value, "title")}}
              />
            </h2>
          </div>

          <div className="contract-text col-md-12 py-2">
            I
            <input
              className="text-center w-40 mx-2 underline"
              type="name"
              placeholder="Your Name"
              value={this.props.activeContract.name}
              onChange={(e) => { this.props.handleInputChange(e.target.value, "name") }}
            />
            agree to:
          </div>

          <div className="p-3">
            <textarea
              className="notes w-100"
              rows="6"
              value={this.props.activeContract.description}
              onChange={(e) => { this.props.handleInputChange(e.target.value, "description") }}
            />
          </div>

          <div className="row px-2 mb-2">
            <div className="col-md-5">
              Completion Date:
            </div>
            <div className="col-md-3 underline">
              <DatePicker
                selected={this.props.activeContract.endDate}
                onChange={this.props.handleDateChange}
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
                  value={this.props.activeContract.name}
                  onChange={(e) => { this.props.handleInputChange(e.target.value, "name") }}
                />
              </div>
              <div className="col-md-6 col-12">
                <input
                  className="text-center mx-2 underline signature sign"
                  type="signature"
                  placeholder="Signature"
                  value={this.props.activeContract.signature}
                  onChange={(e) => { this.props.handleInputChange(e.target.value, "signature") }}
                />
              </div>
            </div>

            <div className="row py-3">
              <div className="col-md-6 col-12">
                <input
                  className="text-center mx-2 underline sign"
                  type="witness-name"
                  placeholder="Witness Name"
                  value={this.props.activeContract.witnessName}
                  onChange={(e) => { this.props.handleInputChange(e.target.value, "witnessName") }}
                />
              </div>
              <div className="col-md-6 col-12">
                <input
                  className="text-center mx-2 underline sign"
                  type="witness-email"
                  placeholder="Witness Email"
                  value={this.props.activeContract.witnessEmail}
                  onChange={(e) => { this.props.handleInputChange(e.target.value, "witnessEmail") }}
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