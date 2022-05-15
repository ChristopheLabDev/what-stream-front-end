import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-new-content',
  templateUrl: './page-new-content.component.html',
  styleUrls: ['./page-new-content.component.css']
})
export class PageNewContentComponent implements OnInit {
  newContentForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newContentForm = this.fb.group({
      name: ['', Validators.required],
      durée: ['', Validators.required],
      description: ['', Validators.required]
    })
  }
  onSubmitForm() {
    console.log(this.newContentForm.value);
  }
}
