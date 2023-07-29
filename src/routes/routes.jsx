import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Saller from "../Pages/joinUs/Saller";
import Buyer from "../Pages/joinUs/Buyer";
import Login from "../Pages/SignIn/Login";
import Home from "../Pages/Home";
import SelectedItems from "../Components/SelectedItems/SelectedItems";
import PriveteRoute from "../PriveteRoutes/PriveteRoute";
import ViewProduct from "../Components/ViewProduct/ViewProduct";
import ManCollections from "../Components/Collections/ManCollections/ManCollections";
import UserDashboard from "../Pages/UserdDashboard/UserDashboard";
import TailorDashboard from "../Pages/TailorDashboard/TailorDashboard";
import HomeDashboard from "../Components/TailorDashboard/HomeDashboard/HomeDashboard";
import AddProducts from "../Components/TailorDashboard/addProduct/AddProducts";
import AllProducts from "../Components/TailorDashboard/AllProducts/AllProducts";
import EditProduct from "../Components/TailorDashboard/EditProduct/EditProduct";
import ManageUsers from "../Components/TailorDashboard/Admin/ManageProduct/ManageUsers";

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
      {
        path: "men",
        element: <ManCollections />,
      },
      {
        path: "userdashboard",
        element: <UserDashboard />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <TailorDashboard />,
    children: [
      {
        path: "/dashboard/tailor",
        element: <HomeDashboard />,
      },
      {
        path: "/dashboard/tailor/addProduct",
        element: <AddProducts />,
      },
      {
        path: "/dashboard/tailor/ownProduct",
        element: <AllProducts />,
      },
      {
        path: "/dashboard/tailor/ownProducts/:id",
        element: <EditProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/dashboard/admin/manageProduct",
        element: <ManageUsers />,
      },
    ],
  },
]);

export default routes;
