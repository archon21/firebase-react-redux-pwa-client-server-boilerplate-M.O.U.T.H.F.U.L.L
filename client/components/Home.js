import React, { Component } from 'react';
import {
  Block,
  WindoW,
  GalleryBlock,
  Divider
} from '../sub-components/containers';
import { Carousel, Fab, List, Table } from '../sub-components';

class Home extends Component {
  state = {
    scrolled: 0
  };
  infoBlock = React.createRef();
  infoBlock2 = React.createRef();

  handleScroll = e => {
    console.log(this.state, this.infoBlock, this.infoBlock2);
    if (this.state.scrolled + e.deltaY >= 0) {
      this.setState({
        scrolled: this.state.scrolled + e.deltaY
      });
    }
  };
  render() {
    const { infoBlock, infoBlock2, state } = this;
    const { scrolled } = state;
    return (
      <div onWheel={this.handleScroll}>
        <Fab options={[{ name: 'share', label: 'Share' }]} />
        <Divider border>
          <h1 className="headliner-1 color-primary">
            Carousel For Most Important Content
          </h1>
        </Divider>
        <WindoW background="background-primary">
          <Carousel
            items={[
              {
                image:
                  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fjonathangifford.com%2Fwp-content%2Fuploads%2FNapoleon_returned-620x350.jpg&f=1',
                primary: 'Napoleon Returns from Elba'
              },
              {
                image:
                  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.history.com%2Fsites%2F2%2F2015%2F08%2FGettyImages-168966911.jpg&f=1',
                primary: 'The Ides of March'
              }
            ]}
          />
        </WindoW>
        <Divider border background="background-secondary" color="color-primary">
          <h1 className="headliner-1">
            Info Blocks For Semi-Important or Informational Content Or Links
          </h1>
        </Divider>
        <WindoW backgroundUrl="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/aerial-architecture-blue-sky-466685.jpg?alt=media&token=7aa85be8-5a3d-4ce9-9411-d54797612395">
          <div
            className={`a-wrapper--left ${scrolled >
              (infoBlock.current && infoBlock.current.offsetHeight + 300) &&
              'visible'}`}
            ref={this.infoBlock}
          >
            <Block
              ref={this.infoBlock}
              column
              onClick={() =>
                this.props.history.push({
                  pathname: '/singlepage/cool',
                  state: 'cool'
                })
              }
              type="info-card"
              style={{ maxWidth: '800px', maxHeight: '200px' }}
            >
              <h4 className="headline-4 color-secondary p-20px">Comentarii</h4>
              <p className="body-1 color-secondary p-20px">
                All Gaul is divided into three parts, one of which the Belgae
                inhabit, the Aquitani another, those who in their own language
                are called Celts.
              </p>
            </Block>
          </div>
          <div
            className={`a-wrapper--top ${scrolled >
              (infoBlock.current && infoBlock.current.offsetHeight + 300) &&
              'visible'}`}
            ref={this.infoBlock}
          >
            <Block
              ref={this.infoBlock}
              column
              onClick={() =>
                this.props.history.push({
                  pathname: '/singlepage/cool',
                  state: 'cool'
                })
              }
              type="info-card"
              style={{ maxWidth: '400px', maxHeight: '400px' }}
            >
              <h4 className="headline-4 color-secondary p-20px">Comentarii</h4>
              <p className="body-1 color-secondary p-20px">
                All Gaul is divided into three parts, one of which the Belgae
                inhabit, the Aquitani another, those who in their own language
                are called Celts, in our Gauls, the third. All these differ from
                each other in language, customs and laws. The river Garonne
                separates the Gauls from the Aquitani; the Marne and the Seine
                separate them from the Belgae.{' '}
              </p>
            </Block>
          </div>
          <div
            className={`a-wrapper--right ${scrolled >
              (infoBlock2.current && infoBlock2.current.offsetHeight + 300) &&
              'visible'}`}
            ref={this.infoBlock2}
          >
            <Block
              column
              type="info-card"
              style={{ maxWidth: '400px', maxHeight: '400px' }}
            >
              <img src="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/CompressedMainImages%2FMainBerlinPlaza-min.JPG?alt=media&token=8a138902-d0d5-42a3-832c-9a48ab66423a" />
              <h4 className="headline-4 color-secondary p-20px">Stors Plaza</h4>
            </Block>
          </div>
        </WindoW>
        <Divider border>
          <h1 className="headliner-1 color-primary">Gallery Card For Images</h1>
        </Divider>
        <WindoW
          column={true}
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/aerial-view-architecture-autumn-280221.jpg?alt=media&token=abcafdb8-c964-40bf-89c8-5b22eb699735"
        >
          <GalleryBlock
            data={{
              image:
                'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flatinamericanstudies.org%2Faztecs%2FTenochtitlan-2.jpg&f=1',
              name: 'Tenochtitlan: Jewel Of the Aztecs',
              url: ''
            }}
          />
        </WindoW>
        <Divider border>
          <h1 className="headliner-1 color-primary">
            Slide Block For Decorative Content, Whatever That Means...
          </h1>
        </Divider>
        <WindoW
          column={true}
          backgroundUrl="https://firebasestorage.googleapis.com/v0/b/ryan-wetmore.appspot.com/o/alone-architecture-buildings-220444.jpg?alt=media&token=22ea5d39-4798-4cc2-8bd0-432d2627ce8d"
        >
          <Block
            type="info-card"
            column
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          >
            <Table
              tableHead={['Name', 'Age']}
              tableDataArr={[['Ryan', '23'], ['Ashley', '23']]}
            />
          </Block>
          <Block
            type="info-card"
            column
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          >
            <List list={['Caligula', 'Nero', 'Caracalla']} />
          </Block>
        </WindoW>
        <Block
          type="slide-block"
          style={{ maxHeight: '400px', maxWidth: '400px' }}
        >
          <h4 className="headline-4 p-20px">Comentarii</h4>
          <p className="body-1 color-secondary p-20px">
            All Gaul is divided into three parts, one of which the Belgae
            inhabit, the Aquitani another, those who in their own language are
            called Celts, in our Gauls, the third. All these differ from each
            other in language, customs and laws. The river Garonne separates the
            Gauls from the Aquitani; the Marne and the Seine separate them from
            the Belgae.{' '}
          </p>
        </Block>
      </div>
    );
  }
}

export default Home;
