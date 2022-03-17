import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { action } from "mobx"
import { IAuthState } from "../../types/auth"
import { IUser } from "../../types/models"
import { checkAuth, login } from "../actions/auth"



const initialState: IAuthState = {
    isAuth: false,
    user: null,
    isLoading: true,
    error: ""
}



const authSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {
        logout(state) {
            localStorage.removeItem("token")
            state.isLoading = false
            state.isAuth = false
            state.error = ""
            state.user = null
        }
    },
    extraReducers: {
        [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            if (action.payload.isAdmin === true) {
                state.isAuth = true
                state.user = action.payload
                state.error = ""
            } else {
                state.isAuth = false
                state.error = 'User with this email is not an ADMIN'
            }
            state.isLoading = false
        },
        [login.pending.type]: (state) => {
            state.isLoading = true
        },
        [login.rejected.type]: (state, ation) => {
            state.error = "User with this email not found"
            state.isLoading = false
        },

        [checkAuth.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
            state.isAuth = true
            state.error = ""
            state.isLoading = false
        },
        [checkAuth.pending.type]: (state) => {
            state.isLoading = true
        },
        [checkAuth.rejected.type]: (state, action) => {
            state.isLoading = false
        },
    }
})


export default authSlice.reducer

export const { logout } = authSlice.actions