import { useRouteError } from "react-router";

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
};

export default ErrorBoundary;
