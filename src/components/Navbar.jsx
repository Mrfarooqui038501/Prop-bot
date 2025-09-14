import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'


export default function Navbar() {
const { user, logout } = useAuth()
const navigate = useNavigate()


async function handleLogout() {
try {
await logout()
navigate('/')
} catch (err) {
console.error(err)
}
}


return (
<header className="bg-white shadow-sm">
<div className="container mx-auto px-6 py-4 flex items-center justify-between">
<Link to="/" className="flex items-center gap-2 font-bold text-xl">
<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" stroke="#223a8a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
<span className="text-2xl">PropBot</span>
</Link>


<nav className="hidden md:flex items-center gap-6 text-sm">
<Link to="/">Home</Link>
<Link to="/listings">Buy</Link>
<a>Rent</a>
<a>Sell</a>
<a>About Us</a>
{user ? (
<button onClick={handleLogout} className="ml-4 small-pill">Logout</button>
) : (
<Link to="/login" className="ml-4 small-pill">Login / Register</Link>
)}
</nav>


<div className="md:hidden">{/* mobile menu placeholder */}</div>
</div>
</header>
)
}