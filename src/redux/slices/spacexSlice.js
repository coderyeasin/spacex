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
        launchDate: [],
        rocketStatus: [],
        status: 'idle',
    },
    reducers: {
        upcoming: (state, action) => {
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
        },
        recentYear: (state, action) => {
            if (action.payload === String('lastWeek')) {
                const lastWeek = state.launch.filter((e) => e.launch_date_utc.slice(9, 13) <= '30');
                const week = state;
                week.launchDate = lastWeek;
            }
            if (action.payload === 'lastMonth') {
                const launchMonth = state.launch.filter(
                    (e) => e.launch_date_utc.slice(5, 7) <= '04'
                );
                const week = state;
                week.launchDate = launchMonth;
            }
            if (action.payload === 'lastYear') {
                const lastYear = state.launch.filter(
                    (e) => e.launch_date_utc.slice(0, 4) === '2020'
                );
                const week = state;
                week.launchDate = lastYear;
            }
        },
        status: (state, action) => {
            if (action.payload === String(true)) {
                const launchStatus = state.launch.filter((e) => e.launch_success === true);

                const newStatus = state;
                newStatus.rocketStatus = launchStatus;
            }
            if (action.payload === String(false)) {
                const launchStatus = state.launch.filter((e) => e.launch_success === false);

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
