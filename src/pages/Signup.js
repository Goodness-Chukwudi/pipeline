import httpService from "../services/HttpService";
import { useState } from "react"
import DataService from "../services/DataService";
import Spinner from "../components/Spinner";
import {useNavigate} from "react-router-dom"


const Signup = () => {

    const navigate = useNavigate();
    const [form, setform] = useState({ first_name:"", last_name:"", phone:"", password: "", confirm_password: "", email: "" });

    function handleChange(e) {
        const { name, value } = e.target;
		setform((previousValue) => {
			return { ...previousValue, [name]: value };
		});
	}
    
    async function signup(e) {
        const response = await httpService.post("/account/signup", form);
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
                    <h2>Sign Up</h2>
                </div>
                <div className="row">
                    <form className="form-group login-form needs-validation">
                    <div className="row">
                        <input type="text" name="first_name" className="form__input my-2" placeholder="First Name" required onChange={handleChange}/>
                    </div>

                    <div className="row">
                        <input type="text" name="last_name" className="form__input my-2" placeholder="Last Name" required onChange={handleChange}/>
                    </div>

                    <div className="row">
                        <input type="tel" name="phone" className="form__input my-2" placeholder="Phone" required onChange={handleChange}/>
                    </div>

                    <div className="row">
                        <input type="email" name="email" className="form__input my-2" placeholder="Email" required onChange={handleChange}/>
                    </div>

                    <div className="row">
                        <input
                        type="password"
                        name="password"
                        className="form__input my-2"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="row">
                        <input
                        type="password"
                        name="confirm_password"
                        className="form__input my-2"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className="row">
                        <button type="button" className="btn btn-outline-warning my-3 loginBtn" onClick={signup}>
                        <Spinner />
                        sign up
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            
            </div>
        </div>
      </div>
      );
  };
  
export default Signup;