import './App.css';
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import HomePage from "./components/HomePage.js"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="main" id="main">
            <div id="wrap-div">
              {/*<Navigation />*/}
              <div>
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route
                    path="*"
                    element={
                      <div className="pageDiv">
                        <h2>404 Error</h2>
                        <p>The page you're looking for doesn't exist.</p>
                      </div>
                    }
                  />
                </Routes>
              </div>
              {/*<Footer />*/}
            </div>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;

