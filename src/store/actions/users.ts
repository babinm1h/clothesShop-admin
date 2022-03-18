import { createAsyncThunk } from "@reduxjs/toolkit";
import { UsersService } from "../../API/usersService";
import { UsersActionTypes } from "../../types/users";



export const fetchUsers = createAsyncThunk(UsersActionTypes.FETCH_ALL, async (_, thunk) => {
    try {
        const data = await UsersService.fetchAll()
        return data
    } catch (err) {
        return thunk.rejectWithValue("Fetching users error")
    }
})



export const deleteUser = createAsyncThunk(UsersActionTypes.DELETE, async (id: string, thunk) => {
    try {
        const data = await UsersService.delete(id)
        return data
    } catch (err) {
        return thunk.rejectWithValue("Deleting user error")
    }
})