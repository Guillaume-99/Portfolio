require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(helmet());

const allowedOrigins = ["http://localhost:5173", "https://guillaumecebil.fr", "https://www.guillaumecebil.fr"];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST"],
    }),
);

app.use(express.json({ limit: "10kb" }));

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        message: "Trop de tentatives, réessaie plus tard.",
    },
    standardHeaders: true,
    legacyHeaders: false,
});

app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "API OK" });
});

app.use("/api/contact", contactLimiter, contactRoutes);

module.exports = app;
