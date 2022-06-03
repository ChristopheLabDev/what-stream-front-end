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
  onClickDeleteContent(contentId: string | undefined) {
    if (contentId) {
    this.contentService.deleteContent(contentId).subscribe({
        next : (resp) => {
          console.log(resp);
          // Todo 
          /**
           * Rechercher dans le tableau this.listCountries
           * l'objet country avec l'_id == countryId
           * et le supprimer pour que notre liste de pays
           * n'affiche plus le pays supprimé
           */

           //Version plus détaillée 
           const detailsNewArrayFiltered = this.listContents.filter((content) => {
             if(content.id !==  contentId) {
               return content;
             } else return;
           });
           this.listContents = detailsNewArrayFiltered;
    },
        error: (err) => { console.error(err)}
      })
    }
  }

}
