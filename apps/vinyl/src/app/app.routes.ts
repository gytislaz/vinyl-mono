import { Route } from '@angular/router';
import { HomepageComponent } from '@vinyl-mono/homepage';

export const appRoutes: Route[] = [
  {
    path: '**',
    component: HomepageComponent
  }
];
