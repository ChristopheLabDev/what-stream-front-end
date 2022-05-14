import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-record',
  templateUrl: './content-record.component.html',
  styleUrls: ['./content-record.component.css']
})
export class ContentRecordComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  releaseDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
    this.title = "Interstellar";
    this.description = "Space Opera";
    this.createdDate = new Date();
    this.releaseDate = new Date();
    this.snaps = 6;
    this.imageUrl = "https://buzz.tt/media/posters/670/posters_2_1500.jpg";
    this.buttonText = 'Snap!'
  }

  onSnap() {
    if (this.buttonText === 'Snap!') {
      this.snaps++;
      this.buttonText = 'Pas Snap...';
    } else {
      this.snaps--;
      this.buttonText = 'Snap!';
    }
  }

}
