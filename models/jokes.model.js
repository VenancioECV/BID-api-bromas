
const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
	Chiste:  {
		type: String,
		maxlength:[3, "The joke must be at least 3 characters"],
		required: [true, "The joke is required"],
	},
	Setup: {
		type: String,
		maxlength:[9, "The joke must be at least 9 characters"],
		required: [true, "The joke is required"],
	}
},
	{timestamps: true}
);  




const Jokes = mongoose.model("chistes", JokesSchema);

module.exports = Jokes;