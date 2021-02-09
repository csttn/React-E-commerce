import React, { useEffect } from "react";
import { connect } from "react-redux";

import HomePage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Header from "./components/header/index";
import Authentication from "./pages/Authentication";
import {
  auth,
  createUserProfileDocument,
} from "./utils/firebase/firebase.config";
import { setCurrentUser } from "./redux/user/user.actions";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  useEffect(() => {
    let logout = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      setCurrentUser(userAuth);
    });

    return function cleanup() {
      logout();
    };
  }, []);

  useEffect(() => {
    console.log(setCurrentUser);
  }, [setCurrentUser]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/auth" component={Authentication} />
      </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
