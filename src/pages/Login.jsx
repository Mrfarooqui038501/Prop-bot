import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthFormInput from '../components/AuthFormInput'


export default function Login() {
const { login } = useAuth()
const navigate = useNavigate()
const [form, setForm] = useState({ email: '', password: '' })
const [error, setError] = useState('')


async function handleSubmit(e) {
e.preventDefault()
setError('')
try {
await login(form.email, form.password)
navigate('/')
} catch (err) {
setError(err.message)
}
}


return (
<div className="container mx-auto px-6 py-12 md:max-w-md">
<h2 className="text-3xl font-bold mb-6">Log In</h2>
{error && <div className="text-red-600 mb-3">{error}</div>}


<form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl card-shadow">
<AuthFormInput label="Email Address" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
<AuthFormInput label="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />


<div className="flex items-center justify-between mt-2">
<label className="flex items-center gap-2"><input type="checkbox" /> Remember Me</label>
<a className="text-sm text-red-500">Forgot Password?</a>
</div>


<button type="submit" className="btn-primary mt-4 w-full">Log In</button>


<div className="mt-6 text-center text-sm text-gray-500">OR CONTINUE WITH</div>
<div className="mt-4 flex items-center justify-center gap-6">
<button className="small-pill"></button>
<button className="small-pill">f</button>
<button className="small-pill">G</button>
</div>
</form>


<div className="mt-4 text-sm">Doesn't have an account? <a href="/signup" className="text-primary">Create One</a></div>
</div>
)
}