import { Outlet } from "react-router";
import Footer from "./components/common/Footer";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <Header />
      <div id="main-app">
        <div className="min-h-[90vh] my-2">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default App;
