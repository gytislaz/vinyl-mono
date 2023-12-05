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
  WISHLIST: recordsType = recordsType.WISHLIST;
  COLLECTION: recordsType = recordsType.COLLECTION;

  recordsService = inject(RecordsService);
  wishlistRecords: Records = {};
  collectionRecords: Records = {};
  selectedType: recordsType = recordsType.WISHLIST;

  constructor() {
    this.recordsService.getAllRecords(recordsType.WISHLIST).then((records) => {
      this.wishlistRecords = records;
    });

    this.recordsService
      .getAllRecords(recordsType.COLLECTION)
      .then((records) => {
        this.collectionRecords = records;
      })
  }

  changeType(newType: recordsType) {
    this.selectedType = newType;
  }


  // filterRecords(text?: string) {
  //   if (!text) {
  //     this.filteredReleases = this.records.releases;
  //     console.log('d', this.records.releases)
  //   } else {
  //     this.filteredReleases = this.records?.releases?.filter(
  //       (release) =>
  //         release?.basic_information.title
  //           ?.toLowerCase()
  //           .includes(text.toLowerCase()) ||
  //         release?.basic_information.artists[0].name
  //           ?.toLowerCase()
  //           .includes(text.toLowerCase())
  //     );
  //   }
  // }
}
