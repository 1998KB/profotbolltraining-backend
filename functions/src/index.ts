// import * as logger from "firebase-functions/logger";
const { onRequest } = require("firebase-functions/v2/https");
import * as express from 'express';
import Widget from './database';
const cors = require('cors');
const app = express();

app.use(cors({ origin: true }));


app.get("/", (req, res) => res.send(Widget.test()));
app.post("/newtraining", async (req, res) => {
    const newTraining = await Widget.newTraining(req.body);
    res.send(newTraining);
});
app.get("/gettrainings", async (req, res) => {
    const trainings = await Widget.getTrainings();
    res.send(trainings);
});
exports.widgets = onRequest(app);
