import { Outlet } from "react-router";
import Header from "./components/header";

const App = () => {
  return (
    <div id="main-app">
      <Header />
      <Outlet />
    </div>
  );
};
export default App;
