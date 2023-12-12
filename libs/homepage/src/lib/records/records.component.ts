import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnChanges } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Records, Release } from '../../types';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'vinyl-mono-records',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css',
})
export class RecordsComponent implements OnChanges {
  @Input() records: Records = {};
  @Input() pageTitle: string = '';
  filteredReleases: Release[] | undefined;
  filterForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      filterValue: [''],
    });

    this.filterForm.get('filterValue')?.valueChanges.subscribe((text) => {
      this.filterRecords(text);
    });
  }

  ngOnChanges() {
    this.filteredReleases = this.records.releases
    this.filterForm.get('filterValue')?.setValue('')
  }

  filterRecords(text?: string) {
    if (!text) {
      this.filteredReleases = this.records.releases;

    } else {
      this.filteredReleases = this.records?.releases?.filter(
        (release) =>
          release?.basic_information.title
            ?.toLowerCase()
            .includes(text.toLowerCase()) ||
          release?.basic_information.artists[0].name
            ?.toLowerCase()
            .includes(text.toLowerCase())
      );
    }
  }
}
