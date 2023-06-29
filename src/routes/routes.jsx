import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Saller from "../Pages/joinUs/Saller";
import Buyer from "../Pages/joinUs/Buyer";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "saller",
        element: <Saller />,
      },
      {
        path: "buyer",
        element: <Buyer />,
      },
    ],
  },
]);

export default routes;
