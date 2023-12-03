import {Injectable} from '@angular/core';
import { TOKEN } from '../environment.prod';
import { Records, recordType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  url = 'https://api.discogs.com/users/GytisLaz/';


  async getAllRecords(recordsType: recordType): Promise<Records> {
    const data = await fetch(this.url + recordsType, {headers: {Authorization: `Discogs token=${TOKEN}`}});
    return (await data.json()) ?? {};
  }

}
