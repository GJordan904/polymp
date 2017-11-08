import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.template.html',
  styleUrls: [
    './dashboard.style.scss'
  ]
})
export class Dashboard {
  sidebarOpen: boolean;

  constructor() { }

  ngOnInit(): void {
    this.calcSidebar();
  }

  private calcSidebar() {
    const width = window.innerWidth;
    this.sidebarOpen = width > 992;
  }
}
