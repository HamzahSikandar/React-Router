import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./errorpage.jsx";
import Contact from "./Routes/contact.jsx";
import "./Routes/root.jsx";
import "./index.css";
import Root from "./Routes/root.jsx";
import ErrorPage from "./errorpage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ path: "contacts/:contactId", element: <Contact /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
