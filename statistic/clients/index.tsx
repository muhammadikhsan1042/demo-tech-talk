import React from "react";
import { createRoot } from "react-dom/client";
import Statistic from "../src/v1/Statistic";

const container = document.createElement("div");

document.body.appendChild(container);

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div> Loading... </div>}>
      <Statistic />
    </React.Suspense>
  </React.StrictMode>,
);
