import { Component, OnInit } from '@angular/core';

import { NavigationStart, Router } from '@angular/router';
import { SidenavService } from './sidenav.service';

@Component({
  templateUrl: './bible-menu.component.html',
  styleUrls: ['./bible-menu.component.css']
})

export class BibleMenuComponent implements OnInit {

  public constructor(
    private router: Router,
    private sidenavService: SidenavService
  ) { }

  public ngOnInit(): void {
    this.router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.sidenavService.close().then(() => { });
        }
      });
  }
}