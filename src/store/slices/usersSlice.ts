import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/models";
import { IUserState } from "../../types/users";
import { deleteUser, fetchUsers } from "../actions/users";



const initialState: IUserState = {
    isDeleting: false,
    isLoading: true,
    users: []
}


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
            state.isLoading = false
        },
        [fetchUsers.rejected.type]: (state) => {
            state.isLoading = false
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },


        [deleteUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.users = state.users.filter(u => u._id !== action.payload.id)
            state.isDeleting = false
        },
        [deleteUser.pending.type]: (state) => {
            state.isDeleting = true
        },
        [deleteUser.rejected.type]: (state) => {
            state.isDeleting = false
        },
    }
})

export default usersSlice.reducer