import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [],
  },
]);

export default routes;
