import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./routes/routes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={routes} />
    </div>
  </React.StrictMode>
);
