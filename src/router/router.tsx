import { createBrowserRouter } from "react-router-dom";
import MainPage from "../components/pages/main/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  // {
  //   path: "/films",
  //   element: <Films />,
  // },
  //   {
  //     path: "/signup",
  //     element: <SignUpForm />,
  //   },
]);
