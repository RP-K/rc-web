import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ForgetPassword from "./pages/ForgetPassword";
import withSuspense from "./utils/hoc/withSuspense";

const ChatPage = withSuspense(lazy(() => import("./pages/ChatPage")));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        index: true,
        element: (
          <h1 className="text-3xl font-bold underline">This is HomePage</h1>
        ),
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path:"/forget",
        element: <ForgetPassword/>
      }
    ],
  },
]);
