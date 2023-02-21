import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";
import withSuspense from "./utils/hoc/withSuspense";

const LogIn = withSuspense(lazy(() => import("./components/auth/LogIn")));
const Signup = withSuspense(lazy(() => import("./components/auth/Signup")));
const ForgetPassword = withSuspense(lazy(() => import("./pages/ForgetPassword")));
const ChatPage = withSuspense(lazy(() => import("./pages/ChatPage")));
const AttorneyPage = withSuspense(lazy(() => import("./pages/AttorneyPage")));
const LandingPage = withSuspense(lazy(() => import("./pages/LandingPage")));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        index: true,
        element: <LandingPage/>
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/attorney",
        element: <AttorneyPage />,
      },
      {
        path:"/forget",
        element: <ForgetPassword/>
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
