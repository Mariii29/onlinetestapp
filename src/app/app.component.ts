import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router : Router){}
  isRoute1Active(): boolean {
    // Check if the current route is '/'
    return this.router.url === '/';
  }
  title = 'Online Test App';

}
