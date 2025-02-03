import React from "react";
import ReactDOM from "react-dom/client";
import Users from "./User";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "function components"),
    React.createElement(Users),// for using again and again 
    React.createElement(Users),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
