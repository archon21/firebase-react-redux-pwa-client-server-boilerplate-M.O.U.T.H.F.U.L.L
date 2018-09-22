import React, { Componenet } from 'react';
import * as firebase from 'firebase';

const firestore = firebase.firestore()

class App extends Componenet {
    state = {

    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(async user => {
          if (user) {
            const exists = await searchForUser(user.email);
            if (!exists) {
              await addNewUser(
                {
                  name: user.displayName,
                  email: user.email,
                  uid: user.uid,
                },
                user.email
              );
            }
            this.unsubscribe = db
              .collection('Users')
              .doc(user.email)
              .onSnapshot(doc => {
                //const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
                return this.setState({
                  user: doc.data(),
                });
              });
          } else {
            console.log('no one signed in');
          }
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
}
export default App
