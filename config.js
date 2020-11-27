import * as firebase from 'firebase/app'
require ('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAPDCRJWp15qPzijkQQhFiOLbXetvwrZVM",
    authDomain: "wily-5fdd7.firebaseapp.com",
    databaseURL: "https://wily-5fdd7.firebaseio.com",
    projectId: "wily-5fdd7",
    storageBucket: "wily-5fdd7.appspot.com",
    messagingSenderId: "267201384270",
    appId: "1:267201384270:web:4801ba832184f52821581f"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()