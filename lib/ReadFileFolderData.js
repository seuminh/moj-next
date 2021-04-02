import fs from 'fs';
import path from 'path';

export function readFileFolderData(filename){
  const currentPath = process.cwd();
  const data = fs.readFileSync(path.join(currentPath, "data", filename) , 'utf-8');
  if(data){
  return JSON.parse(data);
  }
}