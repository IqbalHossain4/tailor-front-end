import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Saller from "../Pages/joinUs/Saller";
import Buyer from "../Pages/joinUs/Buyer";
import Login from "../Pages/SignIn/Login";
import Home from "../Pages/Home";
import SelectedItems from "../Components/SelectedItems/SelectedItems";
import PriveteRoute from "../PriveteRoutes/PriveteRoute";
import ViewProduct from "../Components/ViewProduct/ViewProduct";

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
        element: (
          <PriveteRoute>
            <SelectedItems />
          </PriveteRoute>
        ),
      },
      {
        path: "product/:id",
        element: <ViewProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);

export default routes;
