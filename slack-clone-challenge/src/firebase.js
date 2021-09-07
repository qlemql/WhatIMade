import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBcDZzl9rW7oeKv26BTxBZ00gp9Fk0v_dQ",
    authDomain: "slack-clone-challenge-8495e.firebaseapp.com",
    projectId: "slack-clone-challenge-8495e",
    storageBucket: "slack-clone-challenge-8495e.appspot.com",
    messagingSenderId: "803106479146",
    appId: "1:803106479146:web:7eed1601aa45da43047753"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db;