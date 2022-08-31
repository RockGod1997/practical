import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as Resource from '/Users/samarth/PycharmProjects/practical/practical/my-practical/src/assets/Resource.json'; 
@Injectable({
  providedIn: 'root'
})
export class ResourceServiceService {

  constructor() { }

  fetchProjectDetails():Observable<any>{
    const result=JSON.parse(JSON.stringify(Resource));
    return of(result);

  }
}
