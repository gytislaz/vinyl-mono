import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Records } from '../../types';

@Component({
  selector: 'vinyl-mono-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './records.component.html',
  styleUrl: './records.component.css',
})
export class RecordsComponent {
  @Input() records: Records = {}
  @Input() pageTitle: string = ''

  constructor() {
    console.log(this.records);
  }
}

