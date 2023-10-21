// import * as logger from "firebase-functions/logger";
const { onRequest } = require("firebase-functions/v2/https");
const express = require("express");
const app = express();

// Add middleware to authenticate requests
// app.use(myMiddleware);

// build multiple CRUD interfaces:
app.get("/", (req, res) => res.send("hello"));

// Expose Express API as a single Cloud Function:
exports.widgets = onRequest(app);
