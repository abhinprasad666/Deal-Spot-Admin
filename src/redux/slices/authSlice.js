// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    loginMessage: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Login
        loginRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.loginMessage = true;
            sessionStorage.setItem("admin", "true");
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },

        // Load user
        loadUserRequest: (state) => {
            state.loading = true;
        },
        loadUserSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        loadUserFail: (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
        },

        logoutRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        logoutSuccess: (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.loginMessage = null;
            localStorage.removeItem("isLoggedIn");
        },
        logoutFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },

        clearAuthStateMessage: (state) => {
            state.loading = false;
            state.error = null;
            state.loginMessage = null;
        },
    },
});

export const {
    loginRequest,
    loginSuccess,
    loginFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    registerRequest,
    registerSuccess,
    registerFail,
    logoutRequest,
    logoutSuccess,
    logoutFail,
    clearAuthStateMessage,
} = authSlice.actions;

export default authSlice.reducer;
