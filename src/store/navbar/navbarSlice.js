import { createSlice } from '@reduxjs/toolkit';

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        navbarState: false
    },
    reducers: {
        activateNavBar: (state, /* action */ ) => {
            state.navbarState = true;
        },
        desactivateNavBar: (state, /* action */ ) => {
            state.navbarState = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { activateNavBar, desactivateNavBar } = navbarSlice.actions;