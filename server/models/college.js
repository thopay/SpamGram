import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema({
	Name: String,
	City: String,
	State: String,
	FIPS: Number,
	Lat: Number,
	Lon: Number
});

const CollegeDB = mongoose.model('colleges', collegeSchema)
export default CollegeDB;