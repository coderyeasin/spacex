import React from 'react';

function Rockets({ rocket }) {
    // const { mission_name } = rocket;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div className="card-body">
                        <h5 className="card-title">{rocket.mission_name}</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rockets;
