import { Component } from '@angular/core';
import { slideInAnimation } from './route-animation';
import { HeaderService } from './services/header/header.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  routeData$ = this.router.events.pipe(
      filter(routeEvent => routeEvent instanceof NavigationEnd),
      map(() => this.activatedRoute && this.activatedRoute.firstChild),
      switchMap(firstChild => firstChild.data)
      );


}
