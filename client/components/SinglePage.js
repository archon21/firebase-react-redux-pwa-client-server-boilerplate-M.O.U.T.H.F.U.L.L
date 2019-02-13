import React, { Component } from 'react';
import { WindoW, Divider, Flex, Block } from '../sub-components/containers';
import { Loader, Carousel, List } from '../sub-components';

class SinglePage extends Component {
  state = {
    holding: null
  };
  async componentDidMount() {
    if (this.props.location.state) {
      this.setState({ holding: this.props.location.state.holding });
    } else {
      const { pathname } = this.props.location;
      const targetArr = pathname.split('/');
      const target = targetArr[targetArr.length - 1];
      await this.props.getTarget(target);
      const { foundTarget } = this.props;
      this.setState({ holding: foundTarget });
    }
  }
  render() {
    const { holding } = this.state;
    return holding ? (
      <div>
        {/* <WindoW
          align="align-end"
        backgroundUrl={holding.image}>
        </WindoW> */}
        <WindoW backgroundUrl={holding.image} background="background-secondary">
          <Divider
            border
            backgroundColor="background-primary"
            color="color-secondary"
          >
            <h1 className="headline-3">{holding.name}</h1>
          </Divider>
          <Flex row>
            <div className="flex column align-center">
              <hr />

              <Carousel
                secondary={holding.leasable && holding.availabilities}
                primary={holding.name}
                items={holding.imageArr}
                maxHeight="maxh-450px"
                maxWidth="maxw-900px"
              />
              <div className="flex row wrap justify-center align-center">
                {holding.pdfs ? (
                  <a
                    // to={{ pathname: '/Templates', state: { page, holding } }}
                    className="button large"
                    href={holding.pdfs[0]}
                    target="_blank"
                  >
                    Open Site Plan
                  </a>
                ) : (
                  <div />
                )}
                <button className="button large">
                  Interested In {holding.name}
                </button>
              </div>
            </div>
            <div className="m-30px">
              <Block
                column
                type="info-card"
                backgroundColor="background-primary"
                color="color-secondary"
                maxHeight="maxh-450px"
                maxWidth="maxw-450px"
              >
                <div className="flex column" />
                {holding.location && (
                  <p className="body-1 p-20px">
                    <strong>LOCATION </strong>{' '}
                    <span className="body-2">{holding.location}</span>
                  </p>
                )}
                {holding.availabilities && (
                  <p className="body-1 p-20px">
                    <strong>AVAILABILITIES </strong>{' '}
                    <span className="body-2">{holding.availabilities}</span>
                  </p>
                )}
                {holding.access && (
                  <p className="body-1 p-20px">
                    <strong>ACCESSIBILITY </strong>{' '}
                    <span className="body-2">{holding.access}</span>
                  </p>
                )}
                {holding.parking && (
                  <p className="body-1 p-20px">
                    <strong>PARKING </strong>{' '}
                    <span className="body-2">{holding.parking}</span>
                  </p>
                )}
                {holding.gla && (
                  <p className="body-1 p-20px">
                    <strong>GLA </strong>{' '}
                    <span className="body-2">{holding.gla}</span>
                  </p>
                )}
              </Block>
            </div>
          </Flex>

          <Flex row>
            {holding.tenantsArr && (
              <div className="m-30px">
                <Block
                  column
                  type="info-card"
                  backgroundColor="background-primary"
                  color="color-secondary"
                  maxHeight="maxh-500px"
                  maxWidth="maxw-450px"
                >
                  <h4 className="headline-4 p-20px">Tenants</h4>
                  <List list={holding.tenantsArr} />
                </Block>
              </div>
            )}
            {holding.description && (
              <div className="m-30px">
                <Block
                  column
                  type="info-card"
                  backgroundColor="background-primary"
                  color="color-secondary"
                  maxHeight="maxh-600px"
                  maxWidth="maxw-450px"

                >
                  <h4 className="headline-4  p-20px">
                    Description
                  </h4>
                  <p className="body-1">{holding.description}</p>
                </Block>
              </div>
            )}
          </Flex>
        </WindoW>
      </div>
    ) : (
      <Loader />
    );
  }
}

export default SinglePage;
