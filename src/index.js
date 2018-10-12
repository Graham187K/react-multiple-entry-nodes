import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import GlobalComponent from "./components/Global";
import Profiles from "./components/Profile";

ReactDOM.render(<App />, document.getElementById("root"));

const globalComponent = document.getElementById("global-component");
if (globalComponent) {
    ReactDOM.render(<GlobalComponent />, globalComponent);
}

const profiles = document.getElementById("profile-component");
if (profiles) {
    ReactDOM.render(<Profiles />, profiles);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
