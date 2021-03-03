import React, { useEffect } from "react";

import HomePage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Header from "./components/header/index";
import Authentication from "./pages/Authentication";
import {
  auth,
  createUserProfileDocument,
} from "./utils/firebase/firebase.config";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import { Route, Switch } from "react-router-dom";

import "./App.css";

function App({ setCurrentUser }) {
  useEffect(() => {
    let logout = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return function cleanup() {
      logout();
    };
  }, []);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/auth" component={Authentication} />
      </Switch>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
