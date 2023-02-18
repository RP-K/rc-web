import { Outlet } from "react-router";
import Footer from "./components/common/Footer";
import Header from "./components/header";

const App = () => {
  return (
    <div id="main-app">
      <Header />
      <div className="min-h-screen my-2">
      <Outlet />
      </div>
      <Footer/>
    </div>
  );
};
export default App;
