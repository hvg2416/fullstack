import cors from "cors";
import express, { Application } from "express";
import { songsRouter } from "./routes/songs.route";

const app: Application = express();

const port: number = 3001;

// normalizeData();

app.use(cors());

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res, next) => {
  res.send("Vivpro Server is running.");
});

app.use("/songs", songsRouter);

// Handling wild routes
app.use((req, res, next) => {
  res.status(404).send("Page Not Found.");
});

app.listen(port, function () {
  console.log(`Vivpro Backend is listening on port ${port}!`);
});
