import {Component, OnInit} from "@angular/core";

export interface Item {
  displayName: string,
  route: string,
  iconName: string
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  public sidenavItems: Item[] | undefined;

  constructor() {
  }

  ngOnInit() {
    this.sidenavItems = [
      {
        displayName: 'Dashboard',
        route: '/dashboard',
        iconName: 'home'
      },
      {
        displayName: 'My Groups',
        route: '/groups',
        iconName: 'group'
      }
    ]
  }
}
