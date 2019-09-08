import React, {Fragment} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux'
   
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer";
import HomePage from "./components/page/homePage";
import Collection from "./components/page/collection.jsx";

import store from './Publics/Redux/store.js'

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        
        <Route
          path="/"
          exact
          render={() => {
            return (
              <Fragment>
                <Header />
                <HomePage />
              </Fragment>
            );
          }}
        />
        <Route path="/collection"
            exact
            render={() => {
              return(
                <Fragment>
                  <Header headType="white"/>
                  <Collection/>
                </Fragment>
              )
            }}
          />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
