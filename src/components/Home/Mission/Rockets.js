import React from 'react';

function Rockets({ rocket }) {
    // console.log(rocket);

    const launchTime = new Date(rocket.launch_date_utc);
    // console.log(launchTime.toString());

    console.log(rocket.launch_success);
    const success = Boolean(rocket?.launch_success);
    console.log(success);

    // console.log(rocket.launch_year);

    const failure = rocket.launch_failure_details;
    // console.log(failure?.reason);

    const fireTime = new Date(rocket.static_fire_date_utc);
    // console.log(fireTime);

    console.log(rocket.upcoming);

    const image = rocket.links;
    // console.log(image.mission_patch);
    // mission_patch_small

    const rocketName = rocket.rocket;
    // console.log(rocketName.rocket_name);

    const rocketDetails = rocket.details?.slice(0, 50);
    return (
        <div>
            <div className="col ">
                <div className="card h-100 position-relative p-2">
                    <img
                        src={image.mission_patch_small}
                        className="card-img-top img-fluid w-75 mx-auto"
                        alt="Rocket"
                    />
                    <div className="card-body position-absolute left-0 right-0 bottom-10 top-2 bg-light opacity-75 d-flex justify-content-between gap-2">
                        <div className="rocket_con w-50">
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
                            <h5 className=""> Misson: {rocket?.mission_name}</h5>
                            <span>Launch Year: {rocket.launch_year}</span>
                            <br />
                            <span>Status: {Boolean(rocket.upcoming)}</span>
                        </div>
                    </div>
                    <div className=" position-absolute left-0 right-0 bottom-0 bg-light opacity-75 h-25 p-1 d-flex justify-content-between align-items-center">
                        <span className="text-danger d-block">{failure?.reason}</span>
                        <span className="text-success d-bloc">{success} Green</span>
                        {rocket ? (
                            <p className="text-success">{success}</p>
                        ) : (
                            <p className="text-danger">{failure?.reason}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rockets;
