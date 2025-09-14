import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AuthFormInput from '../components/AuthFormInput'


export default function Signup() {
const { signup } = useAuth()
const navigate = useNavigate()
const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
const [error, setError] = useState('')


async function handleSubmit(e) {
e.preventDefault()
setError('')
if (form.password !== form.confirm) return setError('Passwords do not match')
try {
await signup(form.email, form.password)
navigate('/login')
} catch (err) {
setError(err.message)
}
}


return (
<div className="container mx-auto px-6 py-12 md:max-w-xl">
<h2 className="text-3xl font-bold mb-6">Create new account</h2>
{error && <div className="text-red-600 mb-3">{error}</div>}
<form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl card-shadow">
<AuthFormInput label="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
<AuthFormInput label="Email Address" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
<AuthFormInput label="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} />
<AuthFormInput label="Confirm Password" type="password" value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} />
<button type="submit" className="btn-primary mt-4 w-full">Create Account</button>
</form>
<div className="mt-4 text-sm">Already have an account? <a href="/login" className="text-primary">Log In</a></div>
</div>
)
}