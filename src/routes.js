import React from "react";

import Bones from "./pages/Bones";
import Jaquetas from "./pages/Jaquetas";
import Tenis from "./pages/Tenis";
import Mulheres from "./pages/Mulheres";
import Homens from "./pages/Homens";
import HomePage from "./pages/Homepage";
import Shop from "./pages/shop";
import Header from "./components/header/index";

import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/bones" component={Bones} />
        <Route exact path="/shop/jaquetas" component={Jaquetas} />
        <Route exact path="/shop/tenis" component={Tenis} />
        <Route exact path="/shop/mulheres" component={Mulheres} />
        <Route exact path="/shop/homens" component={Homens} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}
