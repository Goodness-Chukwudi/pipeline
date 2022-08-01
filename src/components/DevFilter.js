import { useState } from "react";

const DevFilter = (props) => {

    const [form, setform] = useState({page: 1});
    function handleChange(e) {
		const { name, value } = e.target;
		setform((previousValue) => {
			return { ...previousValue, [name]: value };
		});
	}

    function clearFilter() {
        setform((previousValue) => {
			return {page: 1};
		});
    }


    return (
        <div>
            <button type="button" className="btn btn-outline-warning mx-1" data-bs-toggle="modal" data-bs-target="#filter">
            filter dev list
            </button>

            <div className="modal fade" id="filter" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">filter dev list</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div className="modal-body">
                        <div className="input-group mb-3">     
                            <span className="input-group-text">name</span>
                            <input onChange={handleChange} type="text" className="form-control" aria-label="name" name="name"></input>
                            <span className="input-group-text">email</span>
                            <input onChange={handleChange} type="text" className="form-control" aria-label="email" name="email"></input>
                        </div>

                        <div className="input-group mb-3">     
                            <span className="input-group-text">location</span>
                            <input onChange={handleChange} type="text" className="form-control" aria-label="location" name="location"></input>
                            <span className="input-group-text">company</span>
                            <input onChange={handleChange} type="text" className="form-control" aria-label="company" name="company"></input>
                        </div>

                        <div className="input-group mb-3">     
                            <span className="input-group-text">stack</span>
                            <input onChange={handleChange} type="text" className="form-control" aria-label="stack" name="stack"></input>
                            <div className="form-check form-switch mx-5 mt-2">
                                <input onChange={handleChange} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" name="hireable"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">hireable</label>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer d-flex justify-content-between">
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal"
                        onClick={() => props.onClear()}
                        >clear</button>
                        <button type="button" data-bs-dismiss="modal" className="btn btn-sm btn-warning" onClick={() => props.onFilter(form)}>set</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevFilter;