import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'authentication',
    initialState: { isAuthenticated: false },
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

//Action creators for the types of actions that are handled by the slice reducer.
export const authActions = authSlice.actions
export default authSlice.reducer