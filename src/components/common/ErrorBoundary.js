import { useRouteError } from "react-router";
import Header from "../header";

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div>
      <Header />
    </div>
  );
};

export default ErrorBoundary;
