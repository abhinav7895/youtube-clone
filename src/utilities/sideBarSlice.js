import { createSlice } from "@reduxjs/toolkit"

const sideBarSlice = createSlice({
    name : "sideBar",
    initialState : {
        isOpen : false,
    },
    reducers : {
        toggleSideBar : (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const {toggleSideBar} =  sideBarSlice.actions;
export default sideBarSlice.reducer;