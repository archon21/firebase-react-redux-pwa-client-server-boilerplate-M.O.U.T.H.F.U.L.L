import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WindoW, Divider, Block } from '../sub-components/containers';
import { Video } from '../sub-components';

class Holdings extends Component {
  state = {
    type: '',
    holdingsToRender: [],
    pathname: ''
  };

  async componentDidMount() {
    await this.mounting();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname.length !== prevProps.location.pathname.length
    ) {
      this.mounting();
    }
  }

  mounting = () => {
    const { pathname } = this.props.location;
    const { holdings } = this.props;
    const targetArr = pathname.split('/');
    const target = targetArr[targetArr.length - 1];
    if (target === 'opportunities') {
      const leasable = [];
      const reducer = property => property.leasable && leasable.push(property);
      holdings.properties.forEach(property => reducer(property));
      this.setState({ page: 'Leasing Opportunities', holdingsToRender: leasable, pathname: target });
    } else if (target === 'all-properties') {
      this.setState({
        page: 'All Properties',
        holdingsToRender: holdings.properties,
        pathname: target
      });
    } else {
      this.setState({
        page: 'Developments',
        holdingsToRender:
          holdings[target === 'development' ? 'developments' : target],
          pathname: target
      });
    }
  };
  render() {
    const { type, page, holdingsToRender, pathname } = this.state;

    console.log(type, page);
    return (
      <div>
        <WindoW>
          <Divider
            border
            backgroundColor="background-primary"
            color="color-secondary"
          >
            <h1 className="headline-3">{page}</h1>
          </Divider>
          {holdingsToRender.map((holding, index) => {
            return (
              <div className="m-30px">
                <Block
                  key={holding.name}
                  column
                  onClick={() =>
                    this.props.history.push({
                      pathname: `/holdings/${pathname}/${holding.name + index}`,
                      state: { holding }
                    })
                  }
                  image
                  color="color-primary"
                  type="info-card"
                  backgroundColor="background-secondary"
                  style={{
                    maxWidth: '400px',
                    maxHeight: '450px',
                    height: '110%'
                  }}
                >
                  <img src={holding.image} />
                  <h6 className="headline-5">{holding.name}</h6>
                  <p className="body-1 text-center">{holding.location}</p>
                  {page === 'Developments' &&
                    (holding.leasable ? (
                      <p className="body-2 text-center color-green">
                        {holding.name} is Ready for Development
                      </p>
                    ) : (
                      <p className="body-2 text-center">
                        More Information Coming Soon.
                      </p>
                    ))}
                  {page === 'Leasing Opportunities' &&
                    (holding.leasable ? (
                      <p className="body-2 text-center color-green">
                        <strong>Availabilty</strong> {holding.availabilities}.
                      </p>
                    ) : (
                      <div />
                    ))}
                     {page === 'All Properties' &&
                    (holding.leasable ? (
                      <p className="body-2 text-center color-green">
                        {holding.name} has leasing opportunities.
                      </p>
                    ) : (
                      <div />
                    ))}
                </Block>
              </div>
            );
          })}
        </WindoW>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  holdings: state.firebase.holdings
});

export default connect(mapStateToProps)(Holdings);
