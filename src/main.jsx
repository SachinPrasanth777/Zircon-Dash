import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Test from "./test.jsx";
import "./index.css";
import Form from "./routes/Form.jsx";
import Dashboard from "./routes/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
