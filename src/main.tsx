import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const ReactHook = lazy(() => import("./modules/react-hook-form"));
const ReactHookControlled = lazy(
  () => import("./modules/react-hook-form/FormControlled"),
);
const Formik = lazy(() => import("./modules/formik"));

const router = createBrowserRouter([
  // react-hook-form
  {
    path: "/",
    element: <ReactHook />,
  },
  {
    path: "/hook-form/:id",
    element: <ReactHook />,
  },
  {
    path: "/hook-form/controlled",
    element: <ReactHookControlled />,
  },
  {
    path: "/hook-form/controlled/:id",
    element: <ReactHookControlled />,
  },
  // formik
  {
    path: "/formik",
    element: <Formik />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
