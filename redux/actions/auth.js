import {SAVE_SESSION} from '../constan/auth'

export const saveSessionToken = (session) => ({
    type : SAVE_SESSION,
    payload : session
})