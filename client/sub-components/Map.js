// import React, { Component } from 'react';
// import { GoogleApiWrapper, Map, Marker, HeatMap } from 'google-maps-react';
// import { mapKey } from '../../secrets';

// // const style = {
// //   width: {
// //     value: '55%',
// //     important: true
// //   },
// //   height: {
// //       value: '20vw',
// //       important: true
// //   }
// // }

// // const gradient = [
// //   'rgba(0, 255, 255, 0)',
// //   'rgba(0, 255, 255, 1)',
// //   'rgba(0, 191, 255, 1)',
// //   'rgba(0, 127, 255, 1)',
// //   'rgba(0, 63, 255, 1)',
// //   'rgba(0, 0, 255, 1)',
// //   'rgba(0, 0, 223, 1)',
// //   'rgba(0, 0, 191, 1)',
// //   'rgba(0, 0, 159, 1)',
// //   'rgba(0, 0, 127, 1)',
// //   'rgba(63, 0, 91, 1)',
// //   'rgba(127, 0, 63, 1)',
// //   'rgba(191, 0, 31, 1)',
// //   'rgba(255, 0, 0, 1)'
// // ];

// export class MapContainer extends Component {
//   render() {


//     return (
//       <Map

//         google={this.props.google}
//         initialCenter={this.props.coords}
//         zoom={18}

//       >
//         {/* <HeatMap
//           gradiant={gradient}
//           opacity={0.3}

//           radius={30}
//         /> */}

//         <Marker position={this.props.coords} name={this.props.name} title={this.props.availabilities} />
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({

//   apiKey: mapKey,
//   libraries: ['visualization', 'traffic']
// })(MapContainer);
