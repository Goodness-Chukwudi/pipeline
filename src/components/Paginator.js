import { useState, useEffect } from "react";
import EventEmitter from "../services/EventEmitter";
import Spinner from "../components/Spinner";

const Paginator = (props) => {

    const [paginator, setPaginator] = useState({})
    useEffect(() => {
        EventEmitter.on('fetchedDevs', (paginator) => setPaginator(paginator));

        return () => {
            EventEmitter.off('fetchedDevs');
        }
      }, [])

      function nextPage() {
        if (paginator.hasNextPage) props.onSetPage(paginator.next)
      }

      function prevPage() {
        if (paginator.hasPrevPage) props.onSetPage(paginator.prev)
      }

    if (paginator.currentPage) {
        return ( 
            <div className="w-75 mx-auto">
                <div className="d-flex justify-content-between">
                    <button 
                        className="border-0 bg-light fs-4"
                        onClick={prevPage}
                        > &lt;</button>
                    <span className="text-light"><Spinner />{paginator.currentPage} of {paginator.pageCount} pages.  * {paginator.perPage} {props.name} per page *</span>
                    <button
                        className="border-0 bg-light fs-4"
                        onClick={nextPage}
                        > &gt;</button>
                </div>
            </div>
            );
    } else {
        return null
    }
  };
  
  export default Paginator;