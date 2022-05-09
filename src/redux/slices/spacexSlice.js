import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSpacex = createAsyncThunk('space/fetchSpacex', async () => {
    const response = await fetch('https://api.spacexdata.com/v3/launches').then((res) =>
        res.json()
    );
    console.log(response);
    return response;
});

export const spacexSlice = createSlice({
    name: 'spacex',
    initialState: {
        launch: [],
        date: [],
        status: 'idle',
    },
    reducers: {},
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

// export const { launchDate } = spacexSlice.actions;

export default spacexSlice.reducer;
