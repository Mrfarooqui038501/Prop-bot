import React from 'react'


export default function PropertyCard({ property }) {
return (
<div className="bg-white rounded-xl overflow-hidden card-shadow">
<img src={property.image} alt={property.name} className="w-full h-56 object-cover" />
<div className="p-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold">{property.name}</h3>
<p className="text-sm text-gray-500">{property.city}, {property.state}</p>
</div>
<div className="text-right">
<div className="text-lg font-bold">$450,000</div>
<button className="mt-3 px-3 py-1 small-pill">Know More</button>
</div>
</div>
</div>
</div>
)
}