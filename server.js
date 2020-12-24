const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const { BorrowingDataSchema } = require("./models/BorrowingData");

dotenv.config({ path: "./config/config.env" });
conn = new mongoose.createConnection(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

console.log(`MongoDB Connected: ${conn.host}`.cyan.underline.bold);

const app = express(); // @route GET /files
// @desc  Display all files in JSON
app.get("/files", (req, res) => {
	gfs.files.find().toArray((err, files) => {
		// Check if files
		if (!files || files.length === 0) {
			return res.status(404).json({
				err: "No files exist",
			});
		}

		// Files exist
		return res.json(files);
	});
});

exports.BorrowingData = conn.model("BorrowingData", BorrowingDataSchema);

// FILE UPLOAD ###############
// Init gfs
let gfs;

conn.once("open", () => {
	// Init stream
	gfs = Grid(conn.db, mongoose.mongo);
	gfs.collection("uploads");
});

const borrowingData = require("./routes/borrowingData");

app.use(express.json());

if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// app.use('/mhs/api/v1/borrowingData', borrowingData);
app.use("/api/v1/borrowingData", borrowingData);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folderr
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
