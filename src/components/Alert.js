import { useState, useEffect } from "react";
import EventEmitter from "../services/EventEmitter";

const Alert = () => {

    let [error, setError] = useState(null)

    useEffect(() => {
        EventEmitter.on('error', (error) => setError(error));
        return () => {
            EventEmitter.off('error');
        }
      }, [])

    if (error) {
        return ( 
            <div className="text-center w-50 alertDiv mx-auto">
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error.message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            );
    } else {
        return <></>
    }
  };
  
  export default Alert;