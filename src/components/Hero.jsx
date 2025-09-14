import React from 'react'


export default function Hero() {
return (
<section className="container mx-auto px-6 py-10">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-4xl font-extrabold">Featured Properties For Sale</h1>
<p className="mt-3 text-gray-600">Discover, Buy, or Rent Verified Properties with Ease.</p>


<div className="mt-6 card-shadow rounded-hero p-6 bg-white flex gap-4 items-center">
<select className="p-3 rounded-full border">
<option>For Buying</option>
</select>
<select className="p-3 rounded-full border">
<option>House</option>
</select>
<select className="p-3 rounded-full border">
<option>Indonesia</option>
</select>
<button className="ml-auto btn-primary">Find Property</button>
</div>
</div>


<div className="rounded-hero overflow-hidden">
<img src="/src/assets/hero.jpg" alt="house" className="w-full object-cover h-96 rounded-hero" />
</div>
</div>
</section>
)
}