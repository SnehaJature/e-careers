import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import UserIndex from "./User/userIndex";
import { HomePage, Jobs } from "./User/pages/index";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <UserIndex />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
      ],
    },
    {
      path: "/admin",
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
