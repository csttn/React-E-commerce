import React, { useEffect, useState } from "react";

import HomePage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Header from "./components/header/index";
import Authentication from "./pages/Authentication";
import {
  auth,
  createUserProfileDocument,
} from "./utils/firebase/firebase.config";

import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState();
  console.log(currentUser);

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
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/auth" component={Authentication} />
      </Switch>
    </>
  );
}

export default App;
