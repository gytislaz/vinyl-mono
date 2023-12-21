import {Injectable} from '@angular/core';
import { Records, recordsType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  url = 'https://api.discogs.com/users/GytisLaz/';


  async getAllRecords(recordsType: recordsType): Promise<Records> {
    const data = await fetch(this.url + recordsType + `?page=1&per_page=100`, {headers: {Authorization: `Discogs token=ksGYKvdBpWQleGtuYiAGvrsKtZINWNBkQdQyaHqt`}});
    return (await data.json()) ?? {};
  }

}
