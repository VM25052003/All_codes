import { redirect } from "react-router-dom"

export function getTokenExpiration() {
    const storedTime = localStorage.getItem('expiration')
    const expiry = new Date(storedTime)
    const now = new Date()
    const duration = expiry.getTime() - now.getTime()
    return duration
}

export function getAuthToken() {
    const token = localStorage.getItem('token')
    if(!token){
        return null
    }
    const duration = getTokenExpiration()
    if(duration < 0) return 'EXPIRED'
    return token
}

export function tokenLoader() {
    return getAuthToken()
}

export function checkAuthLoader(){
    const token = getAuthToken()
    if(!token){
        return redirect('/auth')
    }
    return null
}