import fs from "fs/promises";
import path from "path";

export const writeFile = async (filename: string, data: string) => {
  await fs.writeFile(path.join(process.cwd(), filename), data);
};

export const arraySearch = async (arr: [string], searchKey) => {
  return arr.filter((str) => str.includes(searchKey))
}
