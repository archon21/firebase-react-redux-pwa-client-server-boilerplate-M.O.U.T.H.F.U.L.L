import React, { Component } from 'react';
import { Block, WindoW, GalleryBlock } from '../sub-components/containers';

class Home extends Component {
  render() {
    return (
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
    );
  }
}

export default Home;
