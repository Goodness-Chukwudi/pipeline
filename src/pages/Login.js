import { Link} from "react-router-dom";
import httpService from "../services/HttpService";
import { useState } from "react";
import DataService from "../services/DataService";
import {useNavigate} from "react-router-dom"
import Spinner from "../components/Spinner";

const Login = () => {

    const navigate = useNavigate();
    const [form, setform] = useState({ password: "", email: "" });

    function handleChange(e) {
		const { name, value } = e.target;
		setform((previousValue) => {
			return { ...previousValue, [name]: value };
		});
	}
    
    async function login(e) {
        const response = await httpService.post("/account/login", form);
        if (response.status === 200) {
            DataService.setData("__pipeline__app__token", response.data.token)
            DataService.setData("__pipeline__app__user", response.data.user)
            navigate("/");
        }
    }

    return (
      <div className="min-vh-100 text-light m-5 p-5">
        <div className="container-fluid">
            <div className="row main-content text-center">
            <div className="col-md-4 text-center company__info">
                <span className="company__logo">
                <h2><img className="w-100 h-100 login-img mb-2" src="../images/pipeline logo.png" /></h2>
                </span>
                <h4 className="text-warning h1">&lt;Pipeline /&gt;</h4>
            </div>

            <div className="col-md-8 col-xs-12 col-sm-12">
                <div className="container-fluid">
                <div className="row">
                    <h2>Log In</h2>
                </div>
                <div className="row">
                    <form className="form-group login-form needs-validation">
                    <div className="row">
                        <input type="text" name="email" className="form__input my-4" placeholder="Username" onChange={handleChange} required/>
                    </div>
                    <div className="row">
                        <input
                        type="password"
                        name="password"
                        className="form__input my-4"
                        placeholder="Password"
                        onChange={handleChange}
                        required />
                    </div>
                    <div className="row">
                        <button type="button" onClick={login} className="btn btn-outline-warning my-3 loginBtn">
                        <Spinner />
                        login
                        </button>
                    </div>
                    </form>
                </div>
                <div className="row mt-5">
                    <p>
                        Don't have an account? 
                        <Link className="d-inline text-decoration-none text-warning" to="/signup"> Register Here</Link>
                    </p>

                </div>
                </div>
            </div>
            
            </div>
        </div>
      </div>
      );
  };
  
export default Login;