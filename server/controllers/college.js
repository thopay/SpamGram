import mongoose from 'mongoose';
import CollegeDB from '../models/college.js';

const closest = (arr, lat, lon) => {
	let smallest = Math.abs(arr[0].Lat - lat) + Math.abs(arr[0].Lon - lon)
	let smallestIndex = 0
	for (let i = 1; i < arr.length; i++) {
		if ((Math.abs(arr[i].Lat - lat) + Math.abs(arr[i].Lon - lon)) < smallest) {
			smallestIndex = i
		}
	}
	return smallestIndex
}

export const getCollege = async (req, res, next) => {
	const { state, city, lat, lon } = req.query;
	const states = await CollegeDB.find({'State': state});
	const cities = states.filter(e => e.City == city)
	if (cities.length != 0) {
		res.status(200).json(cities[closest(cities, lat, lon)])
	} else {
		res.status(200).json(states[closest(states, lat, lon)])
	}
}