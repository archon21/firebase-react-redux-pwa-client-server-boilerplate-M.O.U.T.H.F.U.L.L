import React, { Component } from 'react';
import {
  TwitterShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon
} from 'react-share';

class ShareButtons extends Component {
  state = {};
  copyToClipboard = event => {
    event.preventDefault();
    const range = document.createRange();
    range.selectNode(document.getElementById('text-to-copy'));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
  };

  render() {
    const { target } = this.props;
    const { clicked } = this.state;
    return (
      <div className="flex row wrap justify-space-evenly align-center w-100 share-buttons">
        <TwitterShareButton
          className="mdc-icon-button material-icons mdc-button--raised twitter-button__color"
          url={target.url}
          title={target.title}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <FacebookShareButton
          className="mdc-icon-button material-icons mdc-button--raised fb-button__color"
          quote={target.title}
          url={target.url}
        >
          <FacebookIcon size={32} round={true} />{' '}
        </FacebookShareButton>

        <div className="flex row align-center justify-space-evenly">
          <span id="text-to-copy" className="mdc-list-item__secondary-text">
            {target.url}
          </span>

          <button
            onClick={event => {
              this.copyToClipboard(event);
              this.setState({ clicked: true });
            }}
            type="button"
            className="copy-link"
          >
            Copy
          </button>
        </div>
        {clicked ? (
          <p className="mdc-typography--body2 color-black text-center">
            Copied
          </p>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default ShareButtons;
