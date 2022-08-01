import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";


function DevCard(props) {

    const path = "/devs/view/"+ props.dev._id;


	return (
        <div className="rounded ms-4 mb-5 text-light h6">
            <div className="d-flex avatarDiv px-2 pt-3">
                <Avatar 
                    className='mt-2'
                    alt= {props.dev.full_name}
                    src= {props.dev.avatar_url}
                    sx={{ width: 100, height: 100 }}
                />
                <div className="px-3">
                    <div className='mb-3'>{props.dev.full_name || props.dev.name || "Name not provided"}</div>
                    <div className='devCardDetails pt-2'> <span>hireable:</span> {props.dev.hireable.toString()}</div>
                    <div className='devCardDetails'> <span>stack:</span> {props.dev.stack}</div>
                    <div className='devCardDetails'> <span>email:</span> {props.dev.email}</div>
                    <div className='devCardDetails'> <span>location:</span> {props.dev.location || props.dev.country}</div>
                </div>
            </div>
            <div className="devDetails px-2">
                <div style={{height: 100}}></div>

                <Link className="d-inline text-light text-decoration-none" to={path}>
                    <div className="text-center">
                        <button
                                className="w-75 btn btn-sm btn-outline-warning"
                            >
                            view
                        </button>
                    </div>
                </Link>
                
            </div>
        </div>
	);
}

export default DevCard;
