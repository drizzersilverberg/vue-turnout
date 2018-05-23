import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAQU925b3QND90mQuFFunvvIS8dSUXXEeE",
  authDomain: "turnouts-8c54e.firebaseapp.com",
  databaseURL: "https://turnouts-8c54e.firebaseio.com",
  projectId: "turnouts-8c54e",
  storageBucket: "turnouts-8c54e.appspot.com",
  messagingSenderId: "716852698784"
}

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebase.database().ref().child('events')
