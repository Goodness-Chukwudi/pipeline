import { Outlet,} from "react-router-dom";
import Header from "../components/Header";
import Alert from "../components/Alert";

function Layout(props) {
    return (
      <div className="min-vh-100 layout position-relative">
        <Header />
        <Alert />
  
        <Outlet />
  
      <div className="bg-light text-center footer pt-4 mt-5">
        &copy; Chukwudi Ibeche 2022
      </div>
      </div>
    );
}

export default Layout;
