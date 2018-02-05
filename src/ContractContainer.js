import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class ContractContainer extends Component {
  constructor() {
    super();

    this.state = {
      startDate: moment()
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  render() {
    return(
      <div className="contract bg-white mb-">

          <div className="col-md-12 text-center pt-2">
            <h2>
              <input className="light-blue text-center w-100" type="title" placeholder="Challenge Title" />
            </h2>
          </div>

          <div className="contract-text col-md-12 py-2">
            I
            <input className="text-center w-40 mx-2 underline" type="name" placeholder="Your Name" />
            agree to:
          </div>

          <div className="p-3">
            <textarea className="notes w-100" rows="6" />
          </div>

          <div className="row px-2 mb-2">
            <div className="col-md-5">
              Completion Date:
            </div>
            <div className="col-md-3 underline">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="contract-signature mt-2 h-25">

            <div className="row py-3">
              <div className="col-md-6 col-12">
                <input className="text-center mx-2 underline" type="name" placeholder="Your Name" />
              </div>
              <div className="col-md-6 col-12">
                <input className="text-center mx-2 underline signature" type="signature" placeholder="Signature" />
              </div>
            </div>

            <div className="row py-3">
              <div className="col-md-6 col-12">
                <input className="text-center mx-2 underline" type="witness-name" placeholder="Witness Name" />
              </div>
              <div className="col-md-6 col-12">
                <input className="text-center mx-2 underline" type="witness-email" placeholder="Witness Email" />
              </div>
            </div>
          </div>

          <div className="row mt-2 mb-5">
            <div className="col-md-12 text-center">
              <button type="button" className="btn btn-outline-primary">Sign</button>
            </div>
          </div>

      </div>
    );
  }
}

export default ContractContainer;