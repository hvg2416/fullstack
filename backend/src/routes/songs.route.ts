import { Router } from "express";
const songsDataStringified: any = require("../../data/songs.json");

let songsData: any = songsDataStringified;

export const songsRouter = Router();

songsRouter.get("/", (req, res, next) => {
  let response: any = [];
  for (let key in songsData) {
    response.push(songsData[key]);
  }
  res.status(200).json({ songs: response });
});

songsRouter.get("/search", (req, res, next) => {
  let { title }: any = req.query;

  for (let song in songsData) {
    if (songsData[song]["title"].toLowerCase() === title.toLowerCase()) {
      return res.status(200).json(songsData[song]);
    }
  }

  return res.status(200).json({
    error: {
      message: "No Results found.",
    },
  });
});
