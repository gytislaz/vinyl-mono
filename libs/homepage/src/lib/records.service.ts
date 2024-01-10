import { Injectable } from '@angular/core';
import { Records, recordsType } from '../types';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  url = 'https://backend.gytislazauskas.lt/users/GytisLaz/';

  async getAllRecords(recordsType: recordsType): Promise<Records> {
    const data = await fetch(this.url + recordsType);
    return (await data.json()) ?? {};
  }
}
