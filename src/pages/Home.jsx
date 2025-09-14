import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import Newsletter from '../components/Newsletter'
import PropertyCard from '../components/PropertyCard'
import { fetchProperties } from '../services/api'


export default function Home() {
const [properties, setProperties] = useState([])
const [loading, setLoading] = useState(true)


useEffect(() => {
fetchProperties().then(data => {
setProperties(data.slice(0, 6))
setLoading(false)
}).catch(err => console.error(err))
}, [])


return (
<div>
<Hero />
<WhatWeDo />


<section className="container mx-auto px-6 py-10">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-bold">Featured Property</h2>
<a className="small-pill">See 268 New Projects</a>
</div>


<div className="mt-6 grid md:grid-cols-3 gap-6">
{!loading && properties.map(p => <PropertyCard key={p.id} property={p} />)}
</div>
</section>


<Newsletter />
</div>
)
}