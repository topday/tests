import { Component, OnInit } from '@angular/core';


class MenuItem {
    url: string;
    title: string;
}

class Menu {
    url: string;
    title: string;
    child: Array<MenuItem>;
}

const MENU: Menu[] = [
    { 
      url: '/guess-number', 
      title: 'Enjoy Game',
      child: []
    },
    { 
      url: '/register', 
      title: 'Register',
      child: []
    },
    { 
      url: '/log-in', 
      title: 'Login',
      child: []
    },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  route: string;
  routeController: string;
  menu = MENU;

  constructor() {
    let routeNodes = window.location.pathname.split('/'); 
    this.route = window.location.pathname;
    this.routeController = '/' + routeNodes[1];
  }

  ngOnInit() {
  }

}
