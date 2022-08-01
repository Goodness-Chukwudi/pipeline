import { useState, useEffect } from "react";
import EventEmitter from "../services/EventEmitter";

const Spinner = () => {

    const [show, setShow] = useState(false);
    useEffect(() => {
        EventEmitter.on('loading', (value) => setShow(value));
        return () => {
            EventEmitter.off('loading');
        }
      }, [show])

    if (show) {
        return (
            <span className="spinner-border text-light mx-2" role="status">
                <span className="visually-hidden">Loading...</span>
            </span>
        )
    } else {
        return null
    }
}

export default Spinner