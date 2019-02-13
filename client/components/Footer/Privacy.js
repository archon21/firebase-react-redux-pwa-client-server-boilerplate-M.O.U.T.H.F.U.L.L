import React from 'react';
import { WindoW } from '../../sub-components/containers';
import { List } from '../../sub-components';
import { connect } from 'react-redux';
const Privacy = props => {
  const { phone, company } = props;
  return (
    <WindoW column={true}>
      <div className="flex column maxw-1000px p-10px fav-black">
        <h3 className="headline-3 fav-black">Privacy Notice</h3>
        <br />
        <p className="body-1 fav-black">
          This privacy notice discloses the privacy practices for {company}.
          This privacy notice applies solely to information collected by this
          website. It will notify you of the following:
        </p>
        <br />
        <p className="body-1 fav-black">
          This privacy notice discloses the privacy practices for {company}.
          This privacy notice applies solely to information collected by this
          website. It will notify you of the following:
        </p>
        <br />
        <List
          color="fav-black"
          list={[
            'What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.',
            'What choices are available to you regarding the use of your data. The security procedures in place to protect the misuse of your information.',
            'How you can correct any inaccuracies in the information.'
          ]}
        />
        <br />
        <h4 className="headline-4 fav-black">Information Collection, Use, and Sharing</h4>
        <br />
        <p className="body-1 fav-black">
          We are the sole owners of the information collected on this site. We
          only have access to/collect information that you voluntarily give us
          via email or other direct contact from you. We will not sell or rent
          this information to anyone.
        </p>{' '}
        <br />
        <p className="body-1 fav-black">
          We will use your information to respond to you, regarding the reason
          you contacted us. We will not share your information with any third
          party outside of our organization, other than as necessary to fulfill
          your request, e.g. to ship an order.
        </p>{' '}
        <br />
        <p className="body-1 fav-black">
          Unless you ask us not to, we may contact you via email in the future
          to tell you about specials, new products or services, or changes to
          this privacy policy.
        </p>{' '}
        <br />
        <h4 className="headline-4 fav-black">
          Your Access to and Control Over Information
        </h4>{' '}
        <br />
        <p className="body-1 fav-black">
          You may opt out of any future contacts from us at any time. You can do
          the following at any time by contacting us via the email address or
          phone number given on our website:
        </p>{' '}
        <br />
        <List
        color="fav-black"
          list={[
            'See what data we have about you, if any.',
            'Change/correct any data we have about you.',
            'Have us delete any data we have about you.',
            'Express any concern you have about our use of your data.          '
          ]}
        />{' '}
        <br />
        <h4 className="headline-4">Security</h4>
        <br />
        <p className="body-1">
          We take precautions to protect your information. When you submit
          sensitive information via the website, your information is protected
          both online and offline.
        </p>{' '}
        <br />
        <p className="body-1">
          Wherever we collect sensitive information (such as credit card data),
          that information is encrypted and transmitted to us in a secure way.
          You can verify this by looking for a lock icon in the address bar and
          looking for "https" at the beginning of the address of the Web page.
        </p>
        <br />
        <p className="body-1">
          While we use encryption to protect sensitive information transmitted
          online, we also protect your information offline. Only employees who
          need the information to perform a specific job (for example, billing
          or customer service) are granted access to personally identifiable
          information. The computers/servers in which we store personally
          identifiable information are kept in a secure environment.
        </p>
        <br />
        <p className="body-1">
          <strong>
            If you feel that we are not abiding by this privacy policy, you
            should contact us immediately via telephone at {phone} or via email.
          </strong>
        </p>
      </div>
    </WindoW>
  );
};

const mapStateToProps = state => ({
  phone: state.init.phone,
  company: state.init.company
});

export default connect(mapStateToProps)(Privacy);
