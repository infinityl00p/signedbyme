import React, { Component } from 'react';
import moment from 'moment';
import Tilt from 'react-tilt';

class ContractListItem extends Component {
  render() {
    return(
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 320, width: 300 }} >

        <div onClick={() => { this.props.handleClick(this.props.id) }}
          className="contract-list-item bg-white text-center p-5"
        >

          <h1 className="light-blue contract-title col-md-12">
            {this.props.title}
          </h1>
          <p className="col-md-12">
            Ends {moment(this.props.endDate).format('MMMM D Y')}
          </p>
          <p className="signature col-md-12">
            {this.props.signature}
          </p>
        </div>
      </Tilt>
    );
  }
}

export default ContractListItem;