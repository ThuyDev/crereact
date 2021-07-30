/*global firebase*/
import React, { useEffect, useState } from 'react'
import { ReactComponent as Logo } from './restaurant.svg'
import { BiSearchAlt } from 'react-icons/bi'
import RestaurantCard from './RestaurantCard'

function App() {
	const [lsRestaurant, setLsRestaurant] = useState([])

	useEffect(() => {
		if (!firebase) {
			console.log('firebase undefined')
			return
		}
		var query = firebase.firestore().collection('restaurants').limit(8)

		query.onSnapshot(function (snapshot) {
			console.log(snapshot)

			if (!snapshot.size) {
				return console.log('There are no restaurants')
			}

			setLsRestaurant(
				snapshot.docChanges().map((change) => change.doc.data())
			)
		})
	}, [])

	return (
		<div className="min-h-screen bg-gray-200 font-roboto">
			{/* header */}
			<header className="z-10 sticky top-0 flex justify-center h-22 bg-green-700">
				<div className="w-full md:w-5/6">
					<div className="flex items-end m-2 h-8 text-white font-bold">
						<Logo className="w-8 fill-current"></Logo>
						<span className="pl-2">Restaurant ABC</span>
					</div>
					<div className="h-8 flex justify-left items-center mb-2 p-2 rounded-md bg-white text-gray-500">
						<input
							type="text"
							placeholder="Search box"
							className="z-10 w-full pl-6 bg-transparent focus:outline-none"
						/>
						<span className="absolute z-0 focus:bg-gray-500">
							<BiSearchAlt />
						</span>
					</div>
				</div>
			</header>
			{/* main content */}
			<main className="flex justify-center">
				<div className="w-full md:w-5/6 md:my-8">
					<div className="grid gap-4 md:grid-cols-3">
						{lsRestaurant.map((restaurant) => (
							<RestaurantCard
								key={restaurant.name}
								className="flex-1"
								restaurant={restaurant}
							/>
						))}
					</div>
				</div>
			</main>
		</div>
	)
}

export default App
