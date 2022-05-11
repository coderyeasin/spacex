import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpacex, recentYear, status, upcoming } from '../../../redux/slices/spacexSlice';
import Rockets from './Rockets';

function Mission() {
    const [display, setDisplay] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [pageCount] = useState(9);
    const dispatch = useDispatch();

    // data load
    useEffect(() => {
        dispatch(fetchSpacex());
    }, [dispatch]);
    const mission = useSelector((state) => state.spaceReducer.launch);
    const recentStatus = useSelector((state) => state.spaceReducer.upcoming);
    const launchDate = useSelector((state) => state.spaceReducer.launchDate);
    const rocketStatus = useSelector((state) => state.spaceReducer.rocketStatus);

    useEffect(() => {
        setIsLoading(false);
        setDisplay(mission);
    }, [mission]);

    useEffect(() => {
        setIsLoading(false);
        setDisplay(recentStatus);
    }, [recentStatus]);

    useEffect(() => {
        setIsLoading(false);
        setDisplay(rocketStatus);
    }, [rocketStatus]);

    useEffect(() => {
        setIsLoading(false);
        // setDisplay(launchDate);
        console.log(launchDate);
    }, [launchDate]);

    // Search Implement
    const handleRocket = (e) => {
        const searchText = e.target.value;
        const search = mission.filter((name) =>
            name.rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase())
        );
        setDisplay(search);
    };

    // Filtering

    // upcoming
    const handleLatest = (e) => {
        dispatch(upcoming(e.target.value));
    };

    // launch Date
    const lastYears = (e) => {
        dispatch(recentYear(e.target.value));
    };
    // Status
    const handleStatus = (e) => {
        dispatch(status(e.target.value));
    };
    // Get Current Posts
    const indexOfLastPost = page * pageCount;
    const indexOfFirstPost = indexOfLastPost - pageCount;
    const currentPost = display.slice(indexOfFirstPost, indexOfLastPost).reverse();

    // pagination
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(display.length / pageCount); i += 1) {
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
            {display && <p>Rockets Found : {display.length}</p>}
            <div className="my-3 d-flex justify-content-between align-items-center my-5">
                <select name="" id="" onClick={handleLatest}>
                    <option value="Select">Select</option>
                    <option value="true">Upcoming</option>
                    <option value="false">No</option>
                </select>
                <select name="" id="" value="Launch Date" onChange={lastYears}>
                    <option value="Launch Date">Launch Date</option>
                    <option value="lastWeek">Last Week</option>
                    <option value="lastMonth">Last Month</option>
                    <option value="lastYear">Last Year</option>
                </select>
                <select name="" id="" onClick={handleStatus}>
                    <option value="Status">Status</option>
                    <option value="true"> Success</option>
                    <option value="false">Failure</option>
                </select>
            </div>
            {isLoading && (
                <div className="spinner-border text-danger text-center" role="status">
                    <span className="visually-hidden ">Loading...</span>
                </div>
            )}
            {!isLoading && (
                <div className="row row-cols-3 row-cols-md-3 g-4 my-3">
                    {currentPost.map((rocket) => (
                        <Rockets key={rocket?.flight_number} rocket={rocket} />
                    ))}
                </div>
            )}

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
