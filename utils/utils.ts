import { Page } from 'playwright';
import fs from 'fs'; 
import path from 'path';

export async function generateUniqueEmail(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result + '@gmail.com';
  }

  export async function generateUniqueString(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  export async function readDataFromJsonFile(filePath: any) {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          try {
            const jsonData = JSON.parse(data);
            resolve(jsonData);
          } catch (parseError) {
            reject(parseError);
          }
        }
      });
    });
  }

  export async function getPathOfFirstFileFromDataImagesFolder() {
    const files = fs.readdirSync('./data/images');
    const firstFileFromDataImagesFolder = path.join(
      __dirname,
      `../data/images/${files[0]}`,
    );
    return firstFileFromDataImagesFolder;
  }
  