import { createBrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import Home from "../components/Calculator/Home";
import Root from "./Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <Notfound></Notfound>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/calculator",
        element: <Home></Home>,
      },
    ],
  },
]);
