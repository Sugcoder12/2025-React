import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", {id:'heading', class:'headingclass'}, [React.createElement('h1',{},"Om Namah Shivaya"),React.createElement('h2',{},"Jai Shri Krishna")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);