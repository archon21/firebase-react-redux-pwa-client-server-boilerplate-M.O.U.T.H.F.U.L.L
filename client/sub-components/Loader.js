import React from 'react';

const Loader = props => {
//   const { loadingCircle } = props;
  return (
    <div className="flex column justify-center align-center w-100 h-100">
       {/* <div className="loader" /> */}
       <div className="loader--swirl">
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
       </div>
    </div>
  );
};

export default Loader;
