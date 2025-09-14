import React from 'react'


export default function Newsletter() {
return (
<section className="bg-primary text-white py-12 mt-12">
<div className="container mx-auto px-6 text-center">
<h2 className="text-3xl font-bold">Get in Touch with Us</h2>
<p className="mt-3">Subscribe now for exclusive property insights and deals!</p>
<div className="mt-6 flex justify-center">
<input placeholder="Enter your email" className="px-4 py-2 rounded-l-full text-black" />
<button className="btn-primary rounded-r-full">Submit</button>
</div>
</div>
</section>
)
}