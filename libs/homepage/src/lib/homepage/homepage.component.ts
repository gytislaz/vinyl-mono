import { CUSTOM_ELEMENTS_SCHEMA, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from '../records/records.component';
import { RecordsService } from '../records.service';
import { Records, recordType } from '../../types';

@Component({
  selector: 'vinyl-mono-homepage',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  imports: [CommonModule, RecordsComponent],
})
export class HomepageComponent {


  WISHLIST: recordType = recordType.WISHLIST
  COLLECTION: recordType = recordType.COLLECTION

  recordsService = inject(RecordsService);
  wishlistRecords: Records = {};
  collectionRecords: Records = {};
  selectedType: recordType = recordType.WISHLIST

  constructor() {
    this.recordsService.getAllRecords(recordType.WISHLIST).then((records) => {
      console.log(records);
      this.wishlistRecords = records;
    })

    this.recordsService.getAllRecords(recordType.COLLECTION).then((records) => {
      console.log(records);
      this.collectionRecords = records;
    })
}

changeType(newType: recordType) {
  this.selectedType = newType
}
}
