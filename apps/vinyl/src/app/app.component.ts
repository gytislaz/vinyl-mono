import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from '@vinyl-mono/homepage';


@Component({
  standalone: true,
  imports: [RouterModule, HomepageComponent],
  selector: 'vinyl-mono-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
