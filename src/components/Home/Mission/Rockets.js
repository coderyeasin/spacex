import React from 'react';

function Rockets({ rocket }) {
    // console.log(rocket);

    const launchTime = new Date(rocket.launch_date_utc);
    const success = rocket?.launch_success;
    const failure = rocket.launch_failure_details;
    const fireTime = new Date(rocket.static_fire_date_utc);
    const image = rocket.links;
    const rocketName = rocket.rocket;

    const rocketDetails = rocket.details?.slice(0, 50);
    return (
        <div>
            <div className="col ">
                <div className="card h-100 position-relative p-2">
                    <img
                        src={image?.mission_patch_small || image?.mission_patch}
                        className="card-img-top img-fluid w-75 mx-auto"
                        alt="Rocket"
                    />
                    <div className="card-body position-absolute left-0 right-0 bottom-10 top-2 bg-light opacity-75 d-flex justify-content-between gap-2">
                        <div className="rocket_con w-75 lh-base">
                            <h5 className="text-primary">Name: {rocketName?.rocket_name}</h5>
                            <span>{rocketName?.rocket_type}</span> <br />
                            <span className="text-black-50">{rocketDetails}</span> <br />
                            <span className="text-danger">
                                Fire Time: {fireTime.toString().slice(0, 15)}
                            </span>
                        </div>
                        <div className="mission_con w-50">
                            <span className="text-primary">
                                {launchTime.toString().slice(0, 15)}
                            </span>
                            <h5 className="lh-lg"> Misson: {rocket?.mission_name}</h5>
                            <span>Launch Year: {rocket.launch_year}</span>
                            <br />
                            <span className="text-danger">
                                Status: {rocket.upcoming ? 'true' : 'false'}
                            </span>
                        </div>
                    </div>
                    <div className=" position-absolute left-0 right-0 bottom-0 bg-light opacity-75 h-25 p-1 d-flex justify-content-between align-items-center">
                        <span className="text-success d-bloc">
                            {success ? 'Success' : <p className="text-danger">{failure?.reason}</p>}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rockets;
