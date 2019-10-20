import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private auth = new Api();
  private api = new Api();

  constructor(private http : HttpClient) { }

  public getCategoryId(category_id) {
    return this.http.get(this.auth.getUrlCategorySubjects(category_id));
  }

  public getSubject(subject_id){
    return this.http.get(this.api.getUrlSubject(subject_id));

  }

  public getSubjects(){
    return this.http.get(this.api.getUrlSubjects());
  }
}
