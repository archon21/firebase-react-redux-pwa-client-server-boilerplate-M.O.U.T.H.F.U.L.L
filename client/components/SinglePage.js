import React, { Component } from 'react';
import { WindoW, Divider, Flex, Block } from '../sub-components/containers';
import {
  Loader,
  Carousel,
  List,
  MapContainer,
  Textfield
} from '../sub-components';

import { connect } from 'react-redux';
import { alertInteraction, sendMessage } from '../store';

class SinglePage extends Component {
  state = {
    holding: null,
    image: ''
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

  selectImage = index => {
    const { holding } = this.state;
    this.setState({ image: holding.imageArr[index] });
  };
  render() {
    const { holding, image } = this.state;
    return holding ? (
      <div>
        {/* <WindoW
          align="align-end"
        backgroundUrl={holding.image}>
        </WindoW> */}
        <Divider
          border
          backgroundColor="background-primary"
          color="color-secondary"
        >
          <h1 className="headline-4">{holding.name}</h1>
        </Divider>

        <WindoW
          align="align-end"
          backgroundUrl={image !== '' ? image : holding.image}
        >
          {/* <Carousel
                secondary={holding.leasable && holding.availabilities}
                primary={holding.name}
                items={holding.imageArr}
                maxHeight="maxh-450px"
                maxWidth="maxw-900px"
                backgroundColor="background-primary"
              />  */}
          <Flex colum>
            <Flex
              maxWidth="maxw-100"
              style={{ overflowY: 'hidden' }}
            >
              {holding.imageArr.map((image, index) => {
                return (
                  <div
                    className="flex column align-center justify-center carousel__image-background"
                    onClick={() => this.selectImage(index)}
                  >
                    <img className="carousel__image" src={image} />
                  </div>
                );
              })}
            </Flex>

            <Flex row>
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
              <button
                onClick={() =>
                  this.props.alertInteraction(
                    <Block
                      column
                      type="info-card"
                      backgroundColor="background-primary"
                      color="color-secondary"
                      maxHeight="maxh-450px"
                      maxWidth="maxw-450px"
                    >
                      <Textfield placeholder="Email" name="email" />
                    </Block>
                  )
                }
                className="button large"
              >
                Interested In {holding.name}
              </button>
            </Flex>
          </Flex>
        </WindoW>
        <WindoW background="background-primary">
          <Flex row backgroundColor="background-primary">
            <Block
              column
              type="info-card"
              backgroundColor="background-secondary"
              color="color-primary"
              maxHeight="maxh-450px"
              maxWidth="maxw-450px"
              margin="m-30px"
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
            {holding.tenantsArr && (
              <Block
                column
                type="info-card"
                backgroundColor="background-secondary"
                color="color-primary"
                maxHeight="maxh-500px"
                maxWidth="maxw-450px"
                margin="m-30px"
              >
                <h4 className="headline-4 p-20px">Tenants</h4>
                <List color="color-primary" list={holding.tenantsArr} />
              </Block>
            )
            }

              <div className="single-view-map m-30px">
                <MapContainer
                  coords={holding.coords}
                  name={holding.name}
                  availabilities={holding.availabilities}
                />
              </div>

            {holding.description && (
              <Block
                column
                type="info-card"
                backgroundColor="background-secondary"
                color="color-primary"
                maxHeight="maxh-600px"
                maxWidth="maxw-450px"
                margin="m-30px"
              >
                <h4 className="headline-4  p-20px">Description</h4>
                <p className="body-1">{holding.description}</p>
              </Block>
            )}
          </Flex>
        </WindoW>
      </div>
    ) : (
      <Loader />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  alertInteraction: template => dispatch(alertInteraction(true, template)),
  sendMessage: message => dispatch(sendMessage(message))
});

export default connect(
  null,
  mapDispatchToProps
)(SinglePage);
