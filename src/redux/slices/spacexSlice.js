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
        recent: [],
        status: 'idle',
    },
    reducers: {
        upcoming: (state, action) => {
            console.log(typeof action.payload);
            if (action.payload === String(true)) {
                const recentStatus = state.launch.filter((e) => e.upcoming === true);

                const hence = state;
                hence.recent = recentStatus;
            }
            if (action.payload === String(false)) {
                const recentStatus = state.launch.filter((e) => e.upcoming === false);

                const hence = state;
                hence.recent = recentStatus;
            }
            // const recentStatus = state.launch.filter((e) => e.upcoming === action.payload);

            // const hence = state;
            // hence.recent = recentStatus;

            // console.log(recentStatus);
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

export const { upcoming } = spacexSlice.actions;

export default spacexSlice.reducer;
