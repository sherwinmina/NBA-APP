import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import App from "./components/app";
import thunk from "redux-thunk";
import promise from 'redux-promise'

import {BrowserRouter} from 'react-router-dom'

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const createStoreWithMiddleware = applyMiddleware(thunk, promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, enhancer)}>
    <BrowserRouter>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".main")
);
