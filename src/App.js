import { Outlet } from "react-router";
import Footer from "./components/common/Footer";
import Header from "./components/header";

const App = () => {
  return (
    <div id="main-app">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
};
export default App;
