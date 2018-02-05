import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContractListItem from './ContractListItem';

class ContractList extends Component {
  handleClick = (id) => {
    //route to the page with the contract
  }

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true
    };

    return(
      <div className="contract-list">

        <Slider {...settings}>

          {this.props.contracts.map((contract) => {
            return(
              <div key={contract.id}>
                <ContractListItem
                  id={contract.id}
                  title={contract.title}
                  endDate={contract.endDate}
                  witness={contract.witness.name}
                  handleClick={this.handleClick}
                />
              </div>
            )
          })}

        </Slider>

      </div>
    )
  }
}

export default ContractList;