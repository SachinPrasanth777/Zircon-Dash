import React from "react";
import ReactDOM from "react-dom/client";
import { useParams } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Test from "./test.jsx";
import "./index.css";
import Form from "./routes/Form.jsx";
import Dashboard from "./routes/Dashboard.jsx";

const DynamicDashboard = () => {
  // Access route parameters using useParams hook from react-router-dom
  let { link } = useParams();

  // Render different content based on the value of the link parameter
  return <Dashboard link={link} />;
};

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
  // Use route parameters to dynamically generate the dashboard based on a query parameter
  {
    path: "/dashboard/:link", // :link is the route parameter
    element: <DynamicDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
