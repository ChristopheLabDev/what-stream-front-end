import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.css']
})
export class PageAccueilComponent implements OnInit {
  public listContentRecords!: any[];

  constructor() {
    this.listContentRecords = [
      {
        "name": "Interstellar",
        "duree": 180,
        "synopsis": "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
      },
      {
        name: "Film 2",
        duree: 120,
        synopsis: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
      },
      {
        name: "Film 3",
        duree: 180,
        synopsis: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
      },
      {
        name: "Film 4",
        duree: 180,
        synopsis: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
      },
      {
        name: "Film 5",
        duree: 180,
        synopsis: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
      },
      {
        name: "Film 6",
        duree: 180,
        synopsis: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
      },
      {
        name: "Film 7",
        duree: 180,
        synopsis: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
      }
    ]
   }

  ngOnInit(): void {
    // fetch("https://restcountries.com/v3.1/region/europe?fields=name,capital,maps,flags,cca2")
    //   .then((datas) => datas.json())
    //   .then((response) => {
    //     console.log(response);
    //     this.listContentRecords = response;
    //   })
  }

}
