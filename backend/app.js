const express = require("express");
const router = require("./src/routes/api.js");
const app = express();

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");

// MongoDB connection....................................................
const URL = "mongodb+srv://azizulhakim68178:azizulhakim68178@cluster0.bd9lr.mongodb.net//Ecommerc-website";
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });

// Apply middlewares.................................................
app.use(cookieParser());
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());
app.use(xss());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:8000",
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

// Rate Limiting..........................................................
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 15 minutes
  max: 100000, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Disable ETag headers for responses................................
app.set("etag", false);

// API Routes
app.use("/api/v1", router);

// Serve static files for React app..........................................
/* app.use(express.static(path.join(__dirname, "client", "dist"))); */

// Handle React frontend routing................................................
/* app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
}); */

module.exports = app;
