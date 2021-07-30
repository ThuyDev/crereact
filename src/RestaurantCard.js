import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

function RestaurantCard({ restaurant }) {
	return (
		<div className="p-8 md:p-0 rounded-md bg-white shadow-md">
			<img
				className="w-full h-auto md:h-32 rounded-t-md"
				src={restaurant.photo}
			/>
			<div className="relative px-2 py-4 space-y-2">
				<div className="text-lg font-semibold">{restaurant.name}</div>
				<div className="absolute top-2 right-2 text-sm text-gray-600">
					$$$$
				</div>
				<div className="flex text-yellow-500">
					<BsStarFill />
					<BsStarFill />
					<BsStarHalf />
					<BsStar />
					<BsStar />
				</div>
				<div className="text-gray-600 text-sm space-x-2">
					<span>Shushi</span>
					<span>● Jacksonville</span>
				</div>
			</div>
		</div>
	)
}

RestaurantCard.propTypes = {
	restaurant: Object,
}

export default RestaurantCard
