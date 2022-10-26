import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Home',
            link: '',
            index: 0
        }, {
            label: 'Destinations',
            link: './destinations',
            index: 1
        }, {
            label: 'Offers',
            link: './offers',
            index: 2
        }, 
        {
          label: 'Contact',
          link: './contact',
          index: 3
      }, 
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res:any) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}