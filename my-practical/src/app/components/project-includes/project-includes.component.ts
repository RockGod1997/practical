import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-includes',
  templateUrl: './project-includes.component.html',
  styleUrls: ['./project-includes.component.scss']
})
export class ProjectIncludesComponent implements OnInit {

 
  constructor(private fb: FormBuilder) { }
rows=[1];
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
