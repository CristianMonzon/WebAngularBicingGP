import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html'  
})

export class AppComponent implements OnInit{
  title = 'Bicing GP Angular Prototype';

  ngOnInit(): void {

  }
}