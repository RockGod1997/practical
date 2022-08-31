import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
file:any=null;
  form1!: FormGroup;
  ngOnInit(): void {
    this.form1 = this.fb.group({
      projectname: [null, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }
  saveDetails(form1: any) {

  }

  onFileSelection(event:any) {
     this.file = event?.target.files[0];
  }
}
