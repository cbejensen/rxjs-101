// Firebase stuff
import * as firebase from 'firebase/app'
import 'firebase/database'
const firebaseConfig = {
  apiKey: 'AIzaSyB5pWAq3BarfRpTUJabpWN0Fejz3nNXE9c',
  authDomain: 'rxjs-101.firebaseapp.com',
  databaseURL: 'https://rxjs-101.firebaseio.com',
  projectId: 'rxjs-101',
  storageBucket: 'rxjs-101.appspot.com',
  messagingSenderId: '648804584210'
}
try {
  firebase.initializeApp(firebaseConfig)
} catch {
  // not actually an error as we're hot reloading
}

import app from './app'
