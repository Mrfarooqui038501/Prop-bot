import React from 'react'


const Card = ({ title, desc }) => (
<div className="bg-white p-6 rounded-xl card-shadow">
<div className="text-xl font-semibold mb-2">{title}</div>
<div className="text-sm text-gray-600">{desc}</div>
</div>
)


export default function WhatWeDo() {
return (
<section className="container mx-auto px-6 py-10">
<h2 className="text-2xl font-bold mb-6">What We Do?</h2>
<div className="grid md:grid-cols-4 gap-6">
<Card title="Buy & Sell Properties" desc="Find best properties for buying and investment." />
<Card title="Rent & Lease Properties" desc="Explore rental homes and apartments." />
<Card title="Property Evaluation" desc="Get the best market price for your property." />
<Card title="Secure Transactions" desc="Assistance in documentation and payment." />
</div>
</section>
)
}