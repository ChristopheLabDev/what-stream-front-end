import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Content } from 'src/app/models/content';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-page-update-content',
  templateUrl: './page-update-content.component.html',
  styleUrls: ['./page-update-content.component.css']
})
export class PageUpdateContentComponent implements OnInit {
  updateContentForm!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
     private contentService: ContentService,
     private router: Router,
     private fb:FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.contentService.getContentById(param['id-content']).subscribe((content: Content) => {
        console.log(content);
        this.updateContentForm = this.fb.group({
          name: [content.name, Validators.required],
          description: [content.description, Validators.required],
          releasedate: [content.releasedate],
          duration: [content.duration, Validators.required],
          picturelink: [content.picturelink],
          rate: [content.rate, Validators.required],
          id: [content.id],
        })
      })
    })
  }
  onSubmitForm() {
    const contentToUpdate = this.updateContentForm.value;
    this.contentService.updateContent(contentToUpdate).subscribe(() =>{
    this.router.navigateByUrl('/my-contents');
    })
  }
}
