import firebase from 'firebase'
import 'firebase/storage'

var config = {
  apiKey: "AIzaSyA_yxWzuTtL4GKOqi4auyR88oug6Px4oTw",
  authDomain: "nuxt-64a0d.firebaseapp.com",
  databaseURL: "https://nuxt-64a0d.firebaseio.com",
  projectId: "nuxt-64a0d",
  storageBucket: "nuxt-64a0d.appspot.com",
  messagingSenderId: "337466319950"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore()
const storage = firebase.storage().ref()

export default firebase
export {
  db,
  storage
}