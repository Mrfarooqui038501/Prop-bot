import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../services/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'


const AuthContext = createContext()


export function useAuth() {
return useContext(AuthContext)
}


export function AuthProvider({ children }) {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)


function signup(email, password) {
return createUserWithEmailAndPassword(auth, email, password)
}


function login(email, password) {
return signInWithEmailAndPassword(auth, email, password)
}


function logout() {
return signOut(auth)
}


useEffect(() => {
const unsubscribe = onAuthStateChanged(auth, (u) => {
setUser(u)
setLoading(false)
if (u) localStorage.setItem('propbotUser', JSON.stringify({ uid: u.uid, email: u.email }))
else localStorage.removeItem('propbotUser')
})
return unsubscribe
}, [])


const value = { user, signup, login, logout }


return (
<AuthContext.Provider value={value}>
{!loading && children}
</AuthContext.Provider>
)
}