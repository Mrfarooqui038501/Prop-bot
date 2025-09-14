import React from 'react'


export default function Footer() {
return (
<footer className="bg-primary text-white mt-8">
<div className="container mx-auto px-6 py-12 text-center">
<h3 className="text-2xl font-semibold">Get in Touch with Us</h3>
<p className="mt-3 mb-6">Subscribe now for exclusive property insights and deals!</p>
<div className="flex justify-center">
<input placeholder="Enter your email" className="px-4 py-2 rounded-l-full" />
<button className="btn-primary rounded-r-full">Submit</button>
</div>


<div className="mt-8 text-sm opacity-80">@2025 PropBot. All rights reserved</div>
</div>
</footer>
)
}