import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpacex } from '../../../redux/slices/spacexSlice';

function Mission() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSpacex());
    }, [dispatch]);

    const mission = useSelector((state) => state.spaceReducer.launch);
    console.log(mission.map((e) => e.mission_name).slice(0, 9));

    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;
