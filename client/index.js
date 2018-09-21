import React from 'react';
import ReactDOM from 'react-dom';
import {config} from '../secrets';
import * as firebase from 'firebase';


firebase.initializeApp(config)

ReactDOM.render(<div> Boilerplate </div>, document.getElementById('app'));
