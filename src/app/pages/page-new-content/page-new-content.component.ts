import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Content } from 'src/app/models/content';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-page-new-content',
  templateUrl: './page-new-content.component.html',
  styleUrls: ['./page-new-content.component.css']
})
export class PageNewContentComponent implements OnInit {
  newContentForm!: FormGroup;

  constructor(
     private contentService: ContentService,
     private fb: FormBuilder,
     private router: Router) { }

  ngOnInit(): void {
    this.newContentForm = this.fb.group({
      name: ['', Validators.required],
      duration: [ , Validators.required],
      description: ['', Validators.required]
    })
  }
  onSubmitForm() {
    console.log(this.newContentForm.value);
    const newContent = new Content(
      this.newContentForm.value.name,
      this.newContentForm.value.duration,
      this.newContentForm.value.description
    );
    console.log(newContent);

    this.contentService.createNewContent(newContent).subscribe(() => {
      console.log("le contenu a été créé")
      this.router.navigateByUrl('my-contents')
    });
  }
}
