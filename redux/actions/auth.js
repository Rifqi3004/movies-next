import {SAVE_SESSION, LOGOUT} from '../constan/auth'

export const saveSessionToken = (session) => ({
    type : SAVE_SESSION,
    payload : session
})

export const logout = (session) => ({
    type : LOGOUT
})