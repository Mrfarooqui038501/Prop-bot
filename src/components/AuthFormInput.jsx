import React from 'react'


export default function AuthFormInput({ label, ...props }) {
return (
<label className="block mb-4">
<div className="text-sm mb-1">{label}</div>
<input {...props} className="w-full p-3 rounded-xl border input-shadow" />
</label>
)
}