import { promisify } from 'util';
import * as fetch from 'node-fetch';
import { parseString } from 'xml2js';

export async function fetchXML<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const xml = await response.text();

  return new Promise<T>((res, rej) => {
    parseString(
      xml,
      {
        explicitArray: false,
        ignoreAttrs: true
      },
      (err, result) => {
        if (err) {
          rej(err);
        }
        res(result);
      }
    );
  });
}
