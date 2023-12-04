import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from '../records/records.component';
import { RecordsService } from '../records.service';
import { Records, recordsType } from '../../types';

@Component({
  selector: 'vinyl-mono-homepage',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [CommonModule, RecordsComponent],
})
export class HomepageComponent {


  WISHLIST: recordsType = recordsType.WISHLIST
  COLLECTION: recordsType = recordsType.COLLECTION

  recordsService = inject(RecordsService);
  wishlistRecords: Records = {};
  collectionRecords: Records = {};
  selectedType: recordsType = recordsType.WISHLIST

  constructor() {
    this.recordsService.getAllRecords(recordsType.WISHLIST).then((records) => {
      console.log(records);
      this.wishlistRecords = records;
    })

    this.recordsService.getAllRecords(recordsType.COLLECTION).then((records) => {
      console.log(records);
      this.collectionRecords = records;
    })
}

changeType(newType: recordsType) {
  this.selectedType = newType
}
}
