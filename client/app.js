import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Navbar } from './componenets';
import Routes from './routes';
import { config } from '../secrets';


// const firestore = firebase.firestore();

class App extends Component {
  state = {};
  componentDidMount() {
    firebase.initializeApp(config);

    //     firebase.auth().onAuthStateChanged(async user => {
    //       if (user) {
    //         const exists = await searchForUser(user.email);
    //         if (!exists) {
    //           await addNewUser(
    //             {
    //               name: user.displayName,
    //               email: user.email,
    //               uid: user.uid,
    //             },
    //             user.email
    //           );
    //         }
    //         this.unsubscribe = db
    //           .collection('Users')
    //           .doc(user.email)
    //           .onSnapshot(doc => {
    //             //const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
    //             return this.setState({
    //               user: doc.data(),
    //             });
    //           });
    //       } else {
    //         console.log('no one signed in');
    //       }
    //     });
  }
  //   componentWillUnmount() {
  //     this.unsubscribe();
  //   }
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  }
}
export default App;
