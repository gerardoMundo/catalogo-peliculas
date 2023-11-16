import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
    this.items = [
      {
        label: "Home",
        icon: 'pi pi-home',
        routerLink: 'welcome'
      },
      {
        label: "Películas",
        icon: 'pi pi-list',
        routerLink: 'movies'
      },
      {
        label: "Agregar",
        icon: 'pi pi-check-square',
        routerLink: 'movies/add'
      },
      {
        label: "Editar",
        icon: 'pi pi-file-edit',
        routerLink: 'movies/edit'
      },
    ]
  }


  items: MenuItem[] | undefined;
  
}
