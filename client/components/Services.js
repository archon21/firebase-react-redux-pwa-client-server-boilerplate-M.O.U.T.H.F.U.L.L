import React from 'react';

import { WindoW, Divider, Block, Flex } from '../sub-components/containers';
import { Video } from '../sub-components';

const Services = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Divider
        border
        backgroundColor="background-primary"
        color="color-secondary"
      >
        <h1 className="headline-4">Property Management Services</h1>
      </Divider>
      <WindoW
        column
        backgroundUrl="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/berlin-center-plaza%2FIMG_5796.JPG?alt=media&token=54ac8ffb-17a2-4730-b2e5-0a3e39a2bd53"
      >


        <hr />
        <Flex width="w-90" column>
          <Block
            column
            type="info-card"
            maxHeight="maxh-700px"
            maxWidth="maxw-1000px"

          >

            <p className="body-1 color-secondary ">
              As a fully integrated real estate development firm, Hayes
              Developers does it all from the ground up. From land acquisition
              and approvals to construction, leasing, and property management,
              we are involved in our properties every step of the way. We cut
              through obstacles and get the job done right and on schedule. We
              offer the knowledge and expertise of a large, established firm,
              plus the personal attention of a family-owned business.
            </p>
          </Block>
            <br />
          <Block
            column
            type="info-card"
            maxHeight="maxh-700px"
            maxWidth="maxw-1000px"

          >

            <p className="body-1 color-secondary ">
              Tenants can call our office and get personalized service, and, in
              most instances, speak directly to the Principals of the company.
              Our tenants and prospects are handled with courteous, reliable,
              fair and honest service. You will always speak to a person, not a
              machine. Assisting our tenants is our main goal with same day
              solutions and consistent communication with all parties involved.
              We pride ourselves on being detail-oriented and developing good
              relationships.
            </p>
          </Block>
            <br />
          <Block
            column
            type="info-card"
            maxHeight="maxh-700px"
            maxWidth="maxw-1000px"

          >

            <p className="body-1 color-secondary">
              Prospective tenants interested in available properties will
              receive information the same day of inquiry and those interested
              in viewing a property will be able to schedule an appointment at
              their convenience. Our in-house Property Manager is available to
              our tenants and prospects 7 days a week.
            </p>
          </Block>
        </Flex>
        <hr />

          <Flex column>
            <Block
              column
              type="info-card"
              maxHeight="maxh-400px"
              maxWidth="maxw-400px"
              color="color-secondary"
            >

                <h6 className="headline-6 text-center">Property Management Services</h6>
                <p className="body-2 text-center">1471 Pleasant Valley Road <p className="body-2">Manchester, CT 06042</p></p>

                <p className="body-2 text-center">Ph: (860) 646-0131 <p className="body-2">Fax: (860) 644-9073</p></p>

                <p className="body-1 text-center">For more information about our Property Management services, please inquire below.</p>

            </Block>

          </Flex>
      </WindoW>
    </div>
  );
};

export default Services;
