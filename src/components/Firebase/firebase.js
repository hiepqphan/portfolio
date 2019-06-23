import app from "firebase/app";
import "firebase/firebase-firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDGXLrQSNbj2AzmQUqCgkzSTZ429uXvpSc",
    authDomain: "hqp-portfolio.firebaseapp.com",
    databaseURL: "https://hqp-portfolio.firebaseio.com",
    projectId: "hqp-portfolio",
    storageBucket: "hqp-portfolio.appspot.com",
    messagingSenderId: "828570900837",
    appId: "1:828570900837:web:28f07f5a2d29afe2"
  };

class Firebase {
  constructor() {
      app.initializeApp(firebaseConfig);
  }

  getDatabase() {
    return app.firestore();
  }
}

export default Firebase;
