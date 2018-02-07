import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContractListItem from './ContractListItem';

class ContractList extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      centerMode: true
    };

    if(this.props.contracts.length) {
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
                    signature={contract.signature}
                    handleClick={this.props.handleClick}
                  />
                </div>
              )
            })}

          </Slider>

        </div>
      )
    }
    else {
      return(
        <div>

        </div>
      )
    }

  }
}

export default ContractList;