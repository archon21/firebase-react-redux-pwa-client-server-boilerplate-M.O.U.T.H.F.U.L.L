import React from 'react';
import {withRouter} from 'react-router-dom'
import {Block } from './containers'


const HoldingCard = props => {
    const {holding, page, pathname, index, display} = props
    return (
        <Block
        key={holding.name}
        column
        onClick={() =>
          props.history.push({
            pathname: `/holdings/${pathname}/${holding.name + index}`,
            state: { holding }
          })
        }
        margin="m-30px"
        maxWidth={`${display ? 'maxw-100' : 'maxw-500px'}`}
        maxHeight={`${display ? display : 'maxh-400px'}`}
        blockImage="h-400px"
        color="color-secondary"
        type="block--image"
        // backgroundColor="background-primary"

      >
        <img src={holding.image} />
        <div className="block--image__info">
          <h6 className="headline-5">{holding.name}</h6>
          <p
            className={`${
              page !== 'Leasing Opportunities'
                ? 'headline-6'
                : 'body-2'
            } text-center`}
          >
            {holding.location}
          </p>
          {page === 'Developments' &&
            (holding.leasable ? (
              <p className="body-2 text-center">
                {holding.name} is Ready for Development
              </p>
            ) : (
              <p className="body-2 text-center">
                More Information Coming Soon.
              </p>
            ))}
          {page === 'Leasing Opportunities' &&
            (holding.leasable ? (
              <h6 className="headline-6 text-center ">
                <strong>Availabilty</strong> {holding.availabilities}.
              </h6>
            ) : (
              <div />
            ))}
          {page === 'All Properties' &&
            (holding.leasable ? (
              <p className="body-2 text-center">
                {holding.name} has leasing opportunities.
              </p>
            ) : (
              <div />
            ))}
        </div>
        </Block>
    )
}

export default withRouter(HoldingCard)
