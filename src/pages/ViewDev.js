import Avatar from '@mui/material/Avatar';
import {useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import httpService from '../services/HttpService';

const ViewDev = () => {

    const { id } = useParams();
    const [dev, setDev] = useState({});

    useEffect(() => {
        getDev();
      }, []);

      function getDev() {
        httpService.get("/developers/" + id)
        .then((response) => {
            if (response.status === 200) {
                setDev(response.data.data);
            }
        })
    }

    return (
        <div className="rounded mt-5 mx-4 mb-5 text-light h6">
            <div className=" d-flex justify-content-between h1 viewAvatarDiv px-4 pt-1">
                <Avatar 
                    className='mt-4'
                    alt= {dev.full_name}
                    src= {dev.avatar_url}
                    sx={{ width: 250, height: 250 }}
                />

                <div className='text-center w-100 mb-3 mt-5'>{dev.full_name}</div>
            </div>
            
            <div className="viewDevDetails pt-5 mt-2" style={{minHeight: 500}}>
                <div className="row">
                    <div className='col-3 bg-secondary rounded p-3 ms-4 prof-card text-center'>
                        <div className='h4 text-warning wrapOverflow'> {dev.full_name || dev.name}</div>
                        <div className='pb-2 wrapOverflow'> {dev.bio} </div>
                        <div className='pb-2 wrapOverflow'> {dev.email}  </div>
                        <div className='pb-2 wrapOverflow'> {dev.address || dev.location || dev.city}</div>
                        <div className='pb-2 wrapOverflow'> <a href={dev.real_url || dev.url } className=' text-warning'> {dev.real_url || dev.url }</a></div>
                    </div>

                    <div className='col-4 bg-secondary rounded p-4 ms-4'>
                        {/* <div className='mb-2'><span className='me-1 bg-light text-dark rounded p-1 '>about:</span> {dev.stack}</div> */}

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>stack:</span> {dev.stack}</div>

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>github followers:</span> {dev.followers}</div>

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>followers url:</span> <a href={dev.followers_url } className=' text-warning'> {dev.followers_url} </a></div>

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>public respos:</span> {dev.public_repos}</div>

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>respos url:</span><a href={dev.repos_url } className=' text-warning'>{dev.repos_url} </a></div>

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>github groups:</span> {dev.groups}</div>

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>github connections:</span> {dev.connections}</div>


                    </div>

                    <div className='col-4 bg-secondary rounded p-4 ms-4'>

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>experiences:</span> {dev.experiences}</div>

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>education:</span> {dev.education}</div>

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>certifications:</span> {dev.certifications}</div>

                        <div className='mb-2 wrapOverflow'><span className='me-1 badge bg-light text-dark'>articles:</span> {dev.articles}</div>

                    </div>
                </div>
                
            </div>
        </div>
	);
  };
  
  export default ViewDev;