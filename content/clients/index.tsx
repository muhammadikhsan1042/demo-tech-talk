import React from "react";
import { createRoot } from "react-dom/client";
import Content from "../src/v1/Content";

const container = document.createElement("div");

document.body.appendChild(container);

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div> Loading... </div>}>
      <Content />
    </React.Suspense>
  </React.StrictMode>,
);
