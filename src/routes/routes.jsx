import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Saller from "../Pages/joinUs/Saller";
import Buyer from "../Pages/joinUs/Buyer";
import Login from "../Pages/SignIn/Login";
import Home from "../Pages/Home";
import SelectedItems from "../Components/SelectedItems/SelectedItems";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "saller",
        element: <Saller />,
      },
      {
        path: "buyer",
        element: <Buyer />,
      },
      {
        path: "signIn",
        element: <Login />,
      },
      {
        path: "selected",
        element: <SelectedItems />,
      },
    ],
  },
]);

export default routes;
