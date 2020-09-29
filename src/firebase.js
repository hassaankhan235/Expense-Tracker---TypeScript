import firebase from 'firebase'

const configure = {
    apiKey: "AIzaSyDlm-KKoJj8Ipwzz9LaYp_93m-w4TeGU_U",
    authDomain: "expense-tracker-fec1b.firebaseapp.com",
    databaseURL: "https://expense-tracker-fec1b.firebaseio.com",
    projectId: "expense-tracker-fec1b",
    storageBucket: "expense-tracker-fec1b.appspot.com",
    messagingSenderId: "841608624304",
    appId: "1:841608624304:web:3b415027902df6c542e375"
}
firebase.initializeApp(configure)

export default firebase
