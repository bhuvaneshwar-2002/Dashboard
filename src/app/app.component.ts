import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [SidebarComponent, TopbarComponent, DashboardComponent],
  standalone: true
})
export class AppComponent {
  title = 'R-Asset'
}
