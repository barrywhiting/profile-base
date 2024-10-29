import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "../../components/navigation/Navigation";
import Welcome from "../../components/welcome/Welcome";
import reportWebVitals from "../../reportWebVitals";
import * as fontStyles from "../../styles/fonts/fonts.module.scss";
import * as spacingStyles from "../../styles/spacing/margins.module.scss";
import * as homeStyles from "../../styles/pages/home/home.module.scss";

const rootNode = document.getElementById("root") as HTMLElement;
rootNode.className = homeStyles.root;
const root = ReactDOM.createRoot(rootNode);
document.body.className = `${fontStyles.midFont} ${spacingStyles.marginZero}`;
root.render(
  <React.StrictMode>
    <Navigation />
    <Welcome />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
