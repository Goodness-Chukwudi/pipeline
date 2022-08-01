
const DevFilter = () => {

    return (
        <div>
            <button type="button" className="btn btn-outline-warning mx-1" data-bs-toggle="modal" data-bs-target="#location">
                get devs by location
            </button>

            <div className="modal fade" id="location" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Find devs available in the selected location</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-sm btn-warning">set</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevFilter;