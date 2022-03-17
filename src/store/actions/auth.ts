import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../API/authService";
import { AuthActionTypes } from "../../types/auth";



export const login = createAsyncThunk(AuthActionTypes.LOGIN,
    async (payload: { email: string, password: string }, thunk) => {
        try {
            const data = await AuthService.login(payload.email, payload.password)
            return data

        } catch (err) {
            return thunk.rejectWithValue("login error")
        }
    })


export const checkAuth = createAsyncThunk(AuthActionTypes.CHECK,
    async (_, thunkApi) => {
        try {
            const data = await AuthService.check()
            return data

        } catch (err) {
            return thunkApi.rejectWithValue("Ошибка при регистрации")
        }
    })