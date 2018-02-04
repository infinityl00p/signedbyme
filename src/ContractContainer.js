import React, { Component } from 'react';

class ContractContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="contract bg-white">

        <div className="col-md-12 text-center pt-2">
          <h2>
            <input className="contract-title text-center w-100" type="title" placeholder="Challenge Title" />
          </h2>
        </div>

        <div className="contract-text col-md-12 p-4">
          I
          <input className="text-center w-40 mx-2 underline" type="name" placeholder="Your Name" />
          agree to:
        </div>

        <div className="p-3">
          <textarea className="notes w-100" rows="6" />
        </div>

        <div className="contract-signature h-25">

          <div className="row py-3">
            <div className="col-md-6">
              <input className="text-center mx-2 underline" type="name" placeholder="Your Name" />
            </div>
            <div className="col-md-6">
              <input className="text-center mx-2 underline signature" type="name" placeholder="Signature" />
            </div>
          </div>

          <div className="row py-3">
            <div className="col-md-6">
              <input className="text-center mx-2 underline" type="name" placeholder="Witness Name" />
            </div>
            <div className="col-md-6">
              <input className="text-center mx-2 underline" type="name" placeholder="Witness Email" />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ContractContainer;