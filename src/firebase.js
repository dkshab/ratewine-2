import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCtyTLYWd2MYeh2OfqM4yilxt2jWK-WbgA",
  authDomain: "ratewine-2.firebaseapp.com",
  databaseURL: "https://ratewine-2.firebaseio.com",
  projectId: "ratewine-2",
  storageBucket: "ratewine-2.appspot.com",
  messagingSenderId: "772671733417",
  appId: "1:772671733417:web:39e5272c0bedfb624073b8",
  measurementId: "G-WZYF8RE4FQ"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in the database where a user might be
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch a document from that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection("users")
      .doc(uid)
      .get();

    return { uid, ...userDocument.data() };
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export default firebase;
