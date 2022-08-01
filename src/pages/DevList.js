import DevCard from "../components/DevCard";
import Paginator from "../components/Paginator";
import DevFilter from "../components/DevFilter";
import DevLocationFilter from "../components/DevLocationFilter"
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import httpService from "../services/HttpService";
import EventEmitter from "../services/EventEmitter";
import { useSlotProps } from "@mui/base";

const DevList = () => {
    const [devs, setDevs] = useState([]);
    const [query, setQuery] = useState({page: 1});
    useEffect(() => {
        getDevs(query);
      }, [])

    function getDevs(filter) {
        let params = query || filter
        httpService.search("/developers", params)
        .then((response) => {
            if (response.status === 200) {
                setDevs(response.data.data.data);
                EventEmitter.emit('fetchedDevs', response.data.data.paginator);
            }
        })
    }

    function setPage(page) {
        query.page = page;
        getDevs(query)
    }

    function clearFilter() {
        window.location = "/devs"
    }

    function filterDev(filter) {
        setQuery(filter);
        // getDevs(query);
    }

    return (
            <div>
                <div className="d-flex justify-content-between m-5 px-2">  
                    <div className="d-flex">
                        <DevFilter onFilter={setQuery} onClear={ clearFilter }/>
                        <DevLocationFilter />
                    </div> 
                    <div>
                        <button className="btn btn-warning mx-2" onClick={getDevs}> filter </button>
                        <button className="btn btn-warning mx-2" onClick={clearFilter}> reset </button>
                    </div> 
                </div>
            <div className="text-center"><Spinner/></div>
            <div className="min-vh-100 d-flex flex-wrap flex-row justify-content-center mt-5">
                {
                    devs.map((dev, i) => {
                        return <DevCard dev={dev} key={i}/>
                    })
                }
            </div>
            <Paginator onSetPage={setPage} name="devs" />
            </div>
        );
  };
  
  export default DevList;