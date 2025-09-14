import React, { useEffect, useState } from 'react'
import PropertyCard from '../components/PropertyCard'
import { fetchProperties } from '../services/api'


export default function Listings() {
const [properties, setProperties] = useState([])
const [filter, setFilter] = useState('all')


useEffect(() => {
fetchProperties().then(setProperties).catch(console.error)
}, [])


const filtered = properties.filter(p => {
if (filter === 'all') return true
return (filter === 'sale' ? p.forSale === true : p.forSale === false)
})


return (
<section className="container mx-auto px-6 py-10">
<h2 className="text-2xl font-bold mb-4">Properties</h2>
<div className="mb-6 flex gap-4">
<button onClick={() => setFilter('all')} className={`small-pill ${filter === 'all' ? 'bg-primary text-white' : ''}`}>All</button>
<button onClick={() => setFilter('sale')} className={`small-pill ${filter === 'sale' ? 'bg-primary text-white' : ''}`}>For Sale</button>
<button onClick={() => setFilter('rent')} className={`small-pill ${filter === 'rent' ? 'bg-primary text-white' : ''}`}>For Rent</button>
</div>


<div className="grid md:grid-cols-3 gap-6">
{filtered.map(p => <PropertyCard key={p.id} property={p} />)}
</div>
</section>
)
}