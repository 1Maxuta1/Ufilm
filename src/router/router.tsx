import { createBrowserRouter } from "react-router-dom";
import MainPage from "../components/pages/main/MainPage";
import RecoverPassword from "../components/pages/recoverPassword/RecoverPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/recover-password",
    element: <RecoverPassword />,
  },
  {
    path: "/profile",
    element: null,
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
