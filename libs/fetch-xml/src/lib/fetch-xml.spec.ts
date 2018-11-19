jest.mock('node-fetch');
jest.mock('xml2js');

import * as fetch from 'node-fetch';
import { parseString } from 'xml2js';
import { fetchXML } from './fetch-xml';

describe('fetchXML', () => {
  beforeEach(() => {
    fetch.mockReturnValue({
      text: () => ''
    });
    parseString.mockImplementation((xml, options, cb) => {
      cb(null, {
        data: 'data'
      });
    });
  });

  it('should convert xml to json', async () => {
    const data = await fetchXML<any>('https://example.com/');
    expect(data).toEqual({
      data: 'data'
    });
  });
});
