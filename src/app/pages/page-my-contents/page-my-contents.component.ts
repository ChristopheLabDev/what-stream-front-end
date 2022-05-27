import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-page-my-contents',
  templateUrl: './page-my-contents.component.html',
  styleUrls: ['./page-my-contents.component.css']
})
export class PageMyContentsComponent implements OnInit {
  public listContents!: Content[];
  constructor(private contentService: ContentService) { }
    
    
  ngOnInit(): void {
    this.contentService.getAllContents().subscribe((resp) =>{
        console.log(resp);
        this.listContents = resp;
    })
  }

}

