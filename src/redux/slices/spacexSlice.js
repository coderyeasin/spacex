import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSpacex = createAsyncThunk('space/fetchSpacex', async () => {
    const response = await fetch('https://api.spacexdata.com/v3/launches').then((res) =>
        res.json()
    );
    return response;
});

export const spacexSlice = createSlice({
    name: 'spacex',
    initialState: {
        launch: [],
        upcoming: [],
        recentYear: [],
        rocketStatus: [],
        status: 'idle',
    },
    reducers: {
        upcoming: (state, action) => {
            console.log(typeof action.payload);
            if (action.payload === String(true)) {
                const recentStatus = state.launch.filter((e) => e.upcoming === true);

                const latest = state;
                latest.upcoming = recentStatus;
            }
            if (action.payload === String(false)) {
                const recentStatus = state.launch.filter((e) => e.upcoming === false);

                const latest = state;
                latest.upcoming = recentStatus;
            }
            // const recentStatus = state.launch.filter((e) => e.upcoming === action.payload);

            // const hence = state;
            // hence.recent = recentStatus;

            // console.log(recentStatus);
        },
        recentYear: (state, action) => {
            console.log(typeof action.payload);

            const recentYear = state.launch.filter((e) => e);
            console.log(recentYear.launch_year);

            // const lastYear = state;
            // lastYear.year = recentYear;
        },
        status: (state, action) => {
            console.log(typeof action.payload);
            if (action.payload === String(false)) {
                const launchStatus = state.launch.filter((e) => e.launch_success === false);

                const newStatus = state;
                newStatus.rocketStatus = launchStatus;
            }
            if (action.payload === String(true)) {
                const launchStatus = state.launch.filter((e) => e.launch_success === true);

                const newStatus = state;
                newStatus.rocketStatus = launchStatus;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSpacex.fulfilled, (state, action) => {
            const spacex = state;
            spacex.launch = action.payload;
            spacex.status = 'success';
        });
        builder.addCase(fetchSpacex.pending, (state) => {
            const spacex = state;
            spacex.status = 'pending';
        });
    },
});

export const { upcoming, recentYear, status } = spacexSlice.actions;

export default spacexSlice.reducer;
