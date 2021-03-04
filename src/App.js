import React, { useEffect } from "react";

import HomePage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Header from "./components/header/index";
import Authentication from "./pages/Authentication";
import CheckoutPage from "./pages/Checkout/index";
import {
  auth,
  createUserProfileDocument,
} from "./utils/firebase/firebase.config";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

function App({ setCurrentUser, currentUser }) {
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
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/auth"
          render={() =>
            currentUser ? <Redirect to="/" /> : <Authentication />
          }
        />
      </Switch>
    </>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
