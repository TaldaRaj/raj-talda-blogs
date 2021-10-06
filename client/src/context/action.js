export const loginStart = (userCredentials) => ({
    type:"UPDATE_START"
})

export const loginSuccess = (user) => ({
    type:"UPDATE_SUCCESS",
    payload:user
})

export const loginFailure = () => ({
    type:"UPDATE_FAILURE"
})

export const updateStart = (userCredentials) => ({
    type:"LOGIN_START"
})

export const updateSuccess = (user) => ({
    type:"LOGIN_SUCCESS",
    payload:user
})

export const updateFailure = () => ({
    type:"LOGIN_FAILURE"
})

export const logout = () => ({
    type:"LOGOUT"
})