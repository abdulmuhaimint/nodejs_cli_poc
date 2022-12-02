import fs from "fs/promises";
import path from "path";

export const writeFile = async (filename: string, data: string) => {
  await fs.writeFile(path.join(process.cwd(), filename), data);
};

export const searchArray = async (arr: string[], searchKey: string) => {
  if (searchKey && searchArray.length) {
    return arr.filter((str) =>
      str.toLowerCase().includes(searchKey.toLowerCase())
    );
  }
  return []
};
