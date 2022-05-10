import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpacex } from '../../../redux/slices/spacexSlice';
import Rockets from './Rockets';

function Mission() {
    const [display, setDisplay] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount] = useState(9);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSpacex());
    }, [dispatch, display]);

    const mission = useSelector((state) => state.spaceReducer.launch);
    const launch = mission.slice(0, 9);
    console.log(launch);

    // Search Implement
    const handleRocket = (e) => {
        const searchText = e.target.value;
        const search = mission.filter((name) =>
            name.rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase())
        );
        setDisplay(search);
        console.log(search);
    };
    console.log(display);

    // Filtering

    // upcoming

    // launch Date
    const lastYear = () => {
        // const preYear = e.target.value;
        const launchYear = mission.filter((name) => name.launch_year);
        console.log(launchYear);
    };
    // Status

    // Get Current Posts
    const indexOfLastPost = page * pageCount;
    const indexOfFirstPost = indexOfLastPost - pageCount;
    const currentPost = mission.slice(indexOfFirstPost, indexOfLastPost);

    // pagination
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(mission.length / pageCount); i += 1) {
        pageNumbers.push(i);
    }

    // change page
    const paginate = (pageNumber) => {
        setPage(pageNumber);
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
            </form>
            {display && <p>Search Result by Name : {display.length}</p>}
            <div className="my-3 d-flex justify-content-between align-items-center my-5">
                <select name="" id="">
                    <option value="Select">Select</option>
                    <option value="Upcoming">Upcoming</option>
                </select>
                <select name="" id="" value="Launch Date" onChange={lastYear}>
                    <option value="Upcoming">Last Week</option>
                    <option value="Last Month">Last Month</option>
                    <option value="Last Year">Last Year</option>
                </select>
                <select name="" id="">
                    <option value="Select">Status</option>
                    <option value="Upcoming">Failure</option>
                    <option value="Success">Success</option>
                </select>
            </div>

            <div className="row row-cols-3 row-cols-md-3 g-4 my-3">
                {currentPost.map((rocket) => (
                    <Rockets key={rocket.mission_id} rocket={rocket} />
                ))}
            </div>

            {/* pagination */}
            <div className="d-flex justify-content-center align-items-center text-center my-5">
                {pageNumbers.map((number) => (
                    <button
                        type="button"
                        key={number}
                        onClick={() => paginate(number)}
                        className="text-info bg-white-50 px-3 mx-1 border"
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Mission;
