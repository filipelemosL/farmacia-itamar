import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  readonly menuItems = [
    { label: 'Biblioteca', route: '/dashboard', description: 'Topicos e condutas do Itamar' },
  ];
}
