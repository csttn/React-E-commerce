import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNHW9Y8potEvXWs1H8td3MfDSQG9d5FD8",
  authDomain: "e-commerce-ba7c3.firebaseapp.com",
  projectId: "e-commerce-ba7c3",
  storageBucket: "e-commerce-ba7c3.appspot.com",
  messagingSenderId: "309710719230",
  appId: "1:309710719230:web:ddba8bdee16646479d7daf",
  measurementId: "G-TX9NWWV8HF",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error na criação de usuario", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
