import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyA8LDmxE_TAERgMhqn6LjGs2cmQE22aiz8",
  authDomain: "b-ratewine-2.firebaseapp.com",
  databaseURL: "https://b-ratewine-2.firebaseio.com",
  projectId: "b-ratewine-2",
  storageBucket: "b-ratewine-2.appspot.com",
  messagingSenderId: "376290268223",
  appId: "1:376290268223:web:0e59c472d43a1eb7b9d48a"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

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
