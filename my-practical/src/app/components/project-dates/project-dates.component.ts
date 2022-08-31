import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-dates',
  templateUrl: './project-dates.component.html',
  styleUrls: ['./project-dates.component.scss']
})
export class ProjectDatesComponent implements OnInit {

 
  constructor(private fb: FormBuilder) { }
rows=[1];
date=new  Date();
  form!: FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group({
      projectname: [null, Validators.required],
    });
  }
saveDetails(form:any){
  
}

addRows(){
  this.rows.push(1);
}

deleteRow(){
  this.rows.pop();
}
}
