import {promises as fs} from "fs";
import path from "path";

export async function readFileFolderData(filename) {
  const currentPath = process.cwd();
  const data = await fs.readFile(
    path.join(currentPath, "data", filename),
    "utf-8"
  );
  if (data) {
    return JSON.parse(data);
  }
}
