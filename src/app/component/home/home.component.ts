import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frutas:string[];
  modelo:number;
  constructor() { }

  ngOnInit(): void {
      this.frutas = ["Mango", "Guineo", "China", "Uva", "Zapote"];
  }

}
