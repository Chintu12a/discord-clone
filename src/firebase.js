import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAyHyPCvetpMxjbtEPTXedfcHr05oG-HS0",
  authDomain: "discord-clone-new-a088f.firebaseapp.com",
  projectId: "discord-clone-new-a088f",
  storageBucket: "discord-clone-new-a088f.appspot.com",
  messagingSenderId: "86615297171",
  appId: "1:86615297171:web:19ddeefc79360ffdde1166",
  measurementId: "G-G2FFYNJ8RH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
