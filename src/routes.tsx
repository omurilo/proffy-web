import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ClassesList from "./pages/ClassesList";
import ClassForm from "./pages/ClassForm";
import SavedRegistration from "./pages/SavedRegistration";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={ClassesList} />
      <Route path="/give-classes" component={ClassForm} />
      <Route path="/success-give-class" component={SavedRegistration} />
    </BrowserRouter>
  );
};

export default Routes;
