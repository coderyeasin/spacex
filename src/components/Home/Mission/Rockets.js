import React from 'react';

function Rockets({ rocket, failure }) {
    const { details } = rocket;
    const reason = failure.find((e) => e.reason);
    console.log(reason);
    // const failure = rocket.launch_failure_details.map((e) => e.reason);
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div className="card-body">
                        <h5 className="card-title">{rocket.mission_name}</h5>
                        <p className="card-text">{details}</p>
                        <p className="card-text">Flight Number: {rocket.flight_number}</p>
                        <p className="card-text">Launch Local Date: {rocket.launch_date_local}</p>
                        <p className="card-text">Launch Success: {rocket.launch_success}</p>
                        {/* <p className="card-text">Launch Failure: {rocket.launch_failure_details}</p> */}
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"> Lunch Year: {rocket.launch_year} </small>
                        <small className="text-muted"> Upcoming: {rocket.upcoming} </small>
                        <small className="text-muted">
                            FireDate: {rocket.static_fire_date_utc}
                        </small>
                        <p className="text-muted">Failure: {reason.reason}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rockets;
