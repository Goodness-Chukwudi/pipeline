import { Link , useNavigate} from "react-router-dom";
import DataService from "../services/DataService";
import httpService from "../services/HttpService";

const Header = () => {

    const user = DataService.getData("__pipeline__app__user");
    const token = DataService.getData("__pipeline__app__token");
    let greeting = "";
    const navigate = useNavigate();

    if (user && token) {
        greeting  ="Hello, " + user.first_name;
    }

    async function logout(e) {
        const response = await httpService.post("/logout");
        if (response.status === 200) {
            DataService.setData("__pipeline__app__token", null)
            DataService.setData("__pipeline__app__user", null)
            navigate("/");
        }
    }

    return ( 
        <header className="">
        <nav style={{ height: 80 }} className="navbar navbar-expand-lg navbar-dark bg-warning ps-5 pe-2">
            
            <Link className="text-decoration-none text-white h1" to="/">
            &lt;Pipeline /&gt;<span className="h6 text-dark"> ...top talents in Africa's pipeline</span>
            </Link>
            <button
                className="navbar-toggler ms-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav container-fluid d-flex justify-content-end">
                <li className="nav-item">
                    <Link className="nav-link text-white h5" to="/devs">talents</Link>
                </li>
                <li className="nav-item">
                    {!user ? <Link className="nav-link text-white h5" to="/login">login</Link> : null}
                </li>
                <li className="nav-item">
                    {user ? <Link className="nav-link text-white h5" to="" onClick={logout}>logout</Link> : null}
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white h5" to="/signup">signup</Link>
                </li>
                <li className="nav-item">
                    <span className="nav-link text-dark">{greeting}</span>
                </li>
                </ul>
            </div>

        </nav>
        </header>
    );
  };
  
  export default Header;