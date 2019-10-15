import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CarouselPage from "./pages/CarouselPage";

const PageRoutes = () => {
  return (
    <Suspense>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/carousel" component={CarouselPage} />
      </Switch>
    </Suspense>
  );
};

export default PageRoutes;
