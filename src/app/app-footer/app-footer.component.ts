
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html'  
})

export class AppFooterComponent implements OnInit{

    LinkAngular: any|string;
    LinkGpDesarrollador: any|string;

    ngOnInit(): void
    {
      this.LinkAngular ='https://angular.io/start';
      this.LinkGpDesarrollador ='http://www.gestion-personal.com/bicing/desarrollador';
    }

}


