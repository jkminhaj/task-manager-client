import { createBrowserRouter } from "react-router-dom";
import Root from '../Root'
import Login from "../Components/Auth/Login";
import Join from "../Components/Auth/Join";
export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
    },
    {
      path:'/join',
      element:<Join></Join>
    }
  ]);
  