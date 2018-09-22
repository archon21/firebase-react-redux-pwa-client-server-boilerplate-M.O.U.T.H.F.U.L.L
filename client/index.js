import React from 'react';
import ReactDOM from 'react-dom';
import {config} from '../secrets';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';


firebase.initializeApp(config)

ReactDOM.render(<div> Boilerplate </div>, document.getElementById('app'));
registerServiceWorker()
