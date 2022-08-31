import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-costs',
  templateUrl: './project-costs.component.html',
  styleUrls: ['./project-costs.component.scss']
})
export class ProjectCostsComponent implements OnInit {

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
