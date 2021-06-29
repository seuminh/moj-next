import {promises as fs} from "fs";
import path from "path";

export async function readFileFolderData(filename) {
  const data = await fs.readFile(
    path.join("data", filename),
    "utf-8"
);
  if (data) {
    return JSON.parse(data);
  }
}
