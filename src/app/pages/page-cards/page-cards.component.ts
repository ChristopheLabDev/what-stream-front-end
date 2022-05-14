import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-cards',
  templateUrl: './page-cards.component.html',
  styleUrls: ['./page-cards.component.css']
})
export class PageCardsComponent implements OnInit {
  public listContentRecords!: any[];

  constructor() { }

  ngOnInit(): void {
    //fetch("https://restcountries.com/v3.1/region/europe?fields=name,capital,maps,flags,cca2")
     // .then((datas) => datas.json())
      //.then((response) => {
       // console.log(response);
       // this.listContentRecords = response;
      //})
  }
}
