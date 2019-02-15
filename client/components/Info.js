import React from 'react';

import { WindoW, Divider, Block, Flex } from '../sub-components/containers';
import { Video } from '../sub-components';

const Info = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Divider
        border
        backgroundColor="background-primary"
        color="color-secondary"
      >
        <h1 className="headline-4">The Hayes Team</h1>
      </Divider>
      <WindoW column backgroundUrl="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/berlin-center-plaza%2FIMG_5796.JPG?alt=media&token=54ac8ffb-17a2-4730-b2e5-0a3e39a2bd53">
        <hr />
        {/* <img src="https://firebasestorage.googleapis.com/v0/b/hayesdevelopers.appspot.com/o/Hayes-Corp_Building_for_web.jpg?alt=media&token=f07d2d37-353d-4f0a-88f8-46edcf7eb095" /> */}
        <Flex row>
          <Flex column width="w-90">
            <Block
              column
              type="info-card"
              maxHeight="maxh-600px"
              maxWidth="maxw-1000px"
            >
              <p className="body-1 color-secondary p-20px">
                <i>
                Hayes Developers is a family owned and operated business with
                over 50 years’ experience in commercial real estate development,
                leasing and management. We have built a reputation of integrity,
                reliability and experience in the community. We are hands-on
                owners who boast a personal relationship with most of our
                tenants, from big box retailers to smaller mom-and-pop stores.
                We understand our customers’ needs and work hard to address them
                at all stages of development.
                </i>
              </p>
            </Block>
          </Flex>
        </Flex>

        <hr />
        <Flex row width="w-90">
          <Block
            column
            type="info-card"
            maxHeight="maxh-550px"
            maxWidth="maxw-500px"
            full
          >
            <h4 className="headline-4 color-secondary">
              The Hayes Company
            </h4>
            <p className="body-1 color-secondary p-20px">
              Richard P. Hayes, Sr. began his career in 1960 selling real estate
              in Connecticut. The Hayes Company was formed and specialized in
              residential property for 10 years and then became a modular home
              dealer and developed several subdivisions. In 1970 forward, he
              devoted his attention to land sales, commercial and industrial
              brokerage.
            </p>
          </Block>

          <Block
            column
            type="info-card"
            maxHeight="maxh-1150px"
            maxWidth="maxw-500px"
            full
          >
            <h4 className="headline-4 color-secondary h-10">
              Hayes-Kaufman
            </h4>
            <p className="body-1 color-secondary p-20px h-90">
              In 1986, Richard Hayes joined with Mike Kaufman of Basser-Kaufman
              located in Long Island, New York and began a new venture to
              develop grocery anchored shopping centers in Central Connecticut.
              One project led to another and over the next 20 years they
              completed 7 shopping centers under the name of Hayes-Kaufman. This
              venture with Mr. Kaufman and associates proved to be a very
              successful partnership. Today, Rich Jr., along with Steve Kaufman
              and Marc Kemp continue to acquire and develop various retail
              properties. They are involved in all aspects from initial site
              assessments to development, leasing, and management.
            </p>
          </Block>

          <Block
            column
            type="info-card"
            maxHeight="maxh-550px"
            maxWidth="maxw-500px"
            full
          >
            <h4 className="headline-4 color-secondary ">
              Hayes Properties
            </h4>
            <p className="body-1 color-secondary p-20px">
              Richard P. Hayes, Jr. joined the partnership in 1987 and
              contributed to the development of several centers, as well as his
              own projects under Hayes Properties.
            </p>
          </Block>
        </Flex>
      </WindoW>
    </div>
  );
};

export default Info;
