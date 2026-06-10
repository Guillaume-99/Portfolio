require("dotenv").config();

const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ["POST", "GET"],
    }),
);

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.status(200).json({ message: "API OK" });
});

app.use("/api/contact", contactRoutes);

module.exports = app;
console.log("CORS CLIENT_URL =", process.env.CLIENT_URL);
