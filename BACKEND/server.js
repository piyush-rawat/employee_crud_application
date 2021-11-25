console.log("Starting the server...");
require("dotenv").config();

const mongoose = require("mongoose");

// Connect to database before starting the server.
mongoose
  .connect(process.env.MONGO_URI)
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .then(() => {
    console.log("Database Connected.");

    const express = require("express");
    const path = require("path");
    const app = express();

    app.use(express.static("build"));

    app.use(express.json());

    app.use("/api/auth", require("./routes/auth"));
    app.use("/api/employees", require("./routes/employees"));

    app.get("/*", (req, res) => {
      return res.sendFile(path.join(__dirname, "build", "index.html"));
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log("Server Running..."));
  });
