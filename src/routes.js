import React, { useState, useEffect } from "react";

import Bones from "./pages/Bones";
import Jaquetas from "./pages/Jaquetas";
import Tenis from "./pages/Tenis";
import Mulheres from "./pages/Mulheres";
import Homens from "./pages/Homens";
import HomePage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Header from "./components/header/index";
import Authentication from "./pages/Authentication";
import {
  auth,
  createUserProfileDocument,
} from "./utils/firebase/firebase.config";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Routes() {
  const [currentUser, setCurrentUser] = useState(null);

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
      setCurrentUser({ currentUser: userAuth });
      console.log(currentUser);
    });

    return function cleanup() {
      logout();
    };
  }, []);

  return (
    <BrowserRouter>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/bones" component={Bones} />
        <Route exact path="/shop/jaquetas" component={Jaquetas} />
        <Route exact path="/shop/tenis" component={Tenis} />
        <Route exact path="/shop/mulheres" component={Mulheres} />
        <Route exact path="/shop/homens" component={Homens} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/auth" component={Authentication} />
      </Switch>
    </BrowserRouter>
  );
}
