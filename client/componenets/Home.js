import React, { Component } from 'react';
import { Block, WindoW, GalleryBlock } from '../sub-components/containers';
import { Carousel } from '../sub-components';

class Home extends Component {
  render() {
    return (
      <div>
      <WindoW>
        <Carousel items={[{image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fjonathangifford.com%2Fwp-content%2Fuploads%2FNapoleon_returned-620x350.jpg&f=1', primary: 'Napoleon Returns from Elba'}, {image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.history.com%2Fsites%2F2%2F2015%2F08%2FGettyImages-168966911.jpg&f=1', primary: 'The Ides of March'}]} />
      </WindoW>
      <WindoW>
        <h1 className="headline-4 link">This is the landing page</h1>
        <Block type="info-card" style={{ maxWidth: '400px', maxHeight: '400px' }}>
          <h4 className="headline-4 color-secondary p-20px">Comentarii</h4>
          <p className="body-1 color-secondary p-20px">
            All Gaul is divided into three parts, one of which the Belgae
            inhabit, the Aquitani another, those who in their own language are
            called Celts, in our Gauls, the third. All these differ from each
            other in language, customs and laws. The river Garonne separates the
            Gauls from the Aquitani; the Marne and the Seine separate them from
            the Belgae.{' '}
          </p>
        </Block>
        <Block type="slide-block" style={{ maxHeight: '400px', maxWidth: '400px' }}>
          <h4 className="headline-4 color-secondary p-20px">Comentarii</h4>
          <p className="body-1 color-secondary p-20px">
            All Gaul is divided into three parts, one of which the Belgae
            inhabit, the Aquitani another, those who in their own language are
            called Celts, in our Gauls, the third. All these differ from each
            other in language, customs and laws. The river Garonne separates the
            Gauls from the Aquitani; the Marne and the Seine separate them from
            the Belgae.{' '}
          </p>
        </Block>
        <GalleryBlock data={{ image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Flatinamericanstudies.org%2Faztecs%2FTenochtitlan-2.jpg&f=1', name: 'Tenochtitlan: Jewel Of the Aztecs', url: '' }} />
      </WindoW>
      </div>
    );
  }
}

export default Home;
