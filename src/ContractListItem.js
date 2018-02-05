import React, { Component } from 'react';
import Tilt from 'react-tilt';

class ContractListItem extends Component {
  render() {
    return(
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >

        <div onClick={() => { this.props.handleClick(this.props.id) }}
          className="contract-list-item bg-white my-auto ml-5 text-center p-4"
        >

          <h1 className="light-blue col-md-12">
            {this.props.title}
          </h1>

        </div>
      </Tilt>
    );
  }
}

export default ContractListItem;