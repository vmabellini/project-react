import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./components/AppContext";

import App from "./App";

ReactDOM.render(
  <AppContextProvider>
    <Router>
      <App />
    </Router>
  </AppContextProvider>,
  document.getElementById("root")
);
