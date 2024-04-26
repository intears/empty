import { promises as fs, readdir, Dirent } from "fs";
import path from "path";
/**
 * get the folders in a directory and return them
 * @param source {string} is the root dir to search in
 * @callback is the return function
 */
export async function readForDirectories(dir: string) {
  // Read the directory contents
  const files = await fs.readdir(dir, { withFileTypes: true });

  // Filter out only the directories and get their names
  const folders = files
    .filter((dirent) => dirent.isDirectory())
  console.log(`returning: ${folders}`);
  // Return the list of folder names
  return folders;
}

/**
 * get the files in a directory and return them
 * @param source {string} is the root dir to search in
 * @callback is the return function
 */
export async function readForFiles(dir: string){
  // Read the directory contents
  const files = await fs.readdir(dir, { withFileTypes: true });

  // Filter out only the directories and get their names
  const returned_files = files
    .filter((dirent) => dirent.isFile())
  console.log(returned_files);
  // Return the list of folder names
  return returned_files;
}
