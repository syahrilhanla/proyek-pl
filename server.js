const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const http = require("http");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const { BorrowingDataSchema } = require("./models/BorrowingData");

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log("new connection opened");

	socket.emit("message", "this is message");

	socket.on("newStatus", (newStatus) => {
		console.log(newStatus);
	});
});

dotenv.config({ path: "./config/config.env" });
conn = new mongoose.createConnection(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

// Data Model
exports.BorrowingData = conn.model("BorrowingData", BorrowingDataSchema);

console.log(`MongoDB Connected: ${conn.host}`.cyan.underline.bold);

// FILE UPLOAD ###############
// Init gfs
let gfs;

conn.once("open", () => {
	// Init stream
	gfs = Grid(conn.db, mongoose.mongo);
	gfs.collection("uploads");
});

// Create storage engine with crypto
const storage = new GridFsStorage({
	url: process.env.MONGO_URI,
	file: (req, file) => {
		return new Promise((resolve, reject) => {
			crypto.randomBytes(16, (err, buf) => {
				if (err) {
					return reject(err);
				}
				const filename = "" + file.originalname;
				const fileInfo = {
					filename: filename,
					bucketName: "uploads",
				};
				resolve(fileInfo);
			});
		});
	},
});
const upload = multer({ storage });

// @route GET /files
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

// @route GET /files/:filename
// @desc Display Image
app.get(["/:filename", "/adm/:filename", "/wd-2/:filename"], (req, res) => {
	gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
		// Check if file
		if (!file || file.length === 0) {
			return res.status(404).json({
				err: "No file exists",
			});
		}

		// Check if image
		if (file.contentType === "image/jpeg" || file.contentType === "image/png") {
			// Read output to browser
			const readstream = gfs.createReadStream(file.filename);
			readstream.pipe(res);
		} else {
			res.status(404).json({
				err: "Not an image",
			});
		}
	});
});

// @route POST /upload
// @desc  Uploads file to DB
app.post("/upload", upload.single("file"), (req, res) => {
	// res.json({ file: req.file });
	res.redirect("/");
});

// @route GET /files/:filename
// @desc  Display single file object
app.get("/image/:filename", (req, res) => {
	gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
		// Check if file
		if (!file || file.length === 0) {
			return res.status(404).json({
				err: "No file exists",
			});
		}
		// File exists
		return res.json(file);
	});
});

// ############################################

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

server.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
