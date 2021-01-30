import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("HPaJSkrVXHCjXSKPILDS")
  .collection("cartItems")
  .doc("nDMP2a6eqh6wwyueQ9UW");
firestore.doc("/users/HPaJSkrVXHCjXSKPILDS/cartItems/nDMP2a6eqh6wwyueQ9UW");

firestore.collection("/users/HPaJSkrVXHCjXSKPILDS/cartItems");
