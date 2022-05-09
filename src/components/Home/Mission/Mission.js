import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpacex } from '../../../redux/slices/spacexSlice';
import Rockets from './Rockets';

function Mission() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSpacex());
    }, [dispatch]);

    const mission = useSelector((state) => state.spaceReducer.launch);
    const launch = mission.slice(0, 9);
    console.log(mission.map((e) => e.mission_name).slice(0, 9));
    const handleRocket = (e) => {
        console.log(e.target.value);
    };
    return (
        <div className="container my-5">
            <form className="d-flex justify-content-center my-5">
                <input
                    onChange={handleRocket}
                    className="form-control me-2 w-25"
                    type="search"
                    placeholder="Search by Rocket Name"
                    aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
            <div className="my-3 d-flex justify-content-between align-items-center my-5">
                <nav>
                    <li type="square">
                        <a href="www.google.com">Upcoming</a>
                    </li>
                </nav>
                <select name="" id="">
                    <option value="Select">Launch Date</option>
                    <option value="Upcoming">Week</option>
                    <option value="Select">Month</option>
                    <option value="Select">Year</option>
                </select>
                <select name="" id="">
                    <option value="Select">Status</option>
                    <option value="Upcoming">Failure</option>
                    <option value="Select">Success</option>
                </select>
            </div>

            <div className="row row-cols-3 row-cols-md-3 g-4 my-3">
                {launch.map((rocket) => (
                    <Rockets key={rocket.id} rocket={rocket} />
                ))}
            </div>
        </div>
    );
}

export default Mission;
