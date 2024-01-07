import { createSlice } from "@reduxjs/toolkit"

const sideBarSlice = createSlice({
    name : "sideBar",
    initialState : {
        isOpen : true,
    },
    reducers : {
        toggleSideBar : (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const {toggleSideBar} =  sideBarSlice.actions;
export default sideBarSlice.reducer;