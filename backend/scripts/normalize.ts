import { writeFileSync } from "fs";
import rawData from "../data/playlist.json";

let rawSongsData: any = rawData;

export const normalizeData = () => {
  let normalizedData: any = {};
  for (let key in rawSongsData) {
    for (let key2 in rawSongsData[key]) {
      let value = rawSongsData[key][key2];

      if (normalizedData[key2]) {
        normalizedData[key2][key] = value;
      } else {
        normalizedData[key2] = { [key]: value };
      }
      normalizedData[key2].index = key2;
    }
  }

  writeFileSync("./data/songs.json", JSON.stringify(normalizedData));
};
