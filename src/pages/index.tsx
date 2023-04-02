import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./login";
import Main from "./main";

export interface PagesProps {}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

const Pages: React.FC<PagesProps> = () => {
  return <RouterProvider router={router} />;
};

export default Pages;
