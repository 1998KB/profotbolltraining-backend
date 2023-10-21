// import * as logger from "firebase-functions/logger";
const { onRequest } = require("firebase-functions/v2/https");
import * as express from 'express';
import Widget from './database';
const app = express();

app.get("/", (req, res) => res.send(Widget.test()));

exports.widgets = onRequest(app);
