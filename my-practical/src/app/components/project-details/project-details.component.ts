import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceServiceService } from 'src/app/services/resource-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group({
      Maximum: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      Minimum: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
      Description: [null, Validators.required],
      Activity: [null, Validators.required],
      Organisation: [null, Validators.required],
      Category: [null, Validators.required],
      Title: [null, Validators.required],
    });
  }
saveDetails(form:any){
  
}
}
