import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  private api = new Api();

  constructor(private http: HttpClient ) { }

  getHomeworks(){
    console.log(this.api.getUrlHomeworks())
    return this.http.get(this.api.getUrlHomeworks());
  }
  public getHomeworkId(homework_id) {
    return this.http.get(this.api.getUrlHomeworksDetail(homework_id));
  }
  public store(data:any, subject_id){
    return this.http.post(this.api.getUrlHomeworks(),{
      title : data.title,
      description : data.description,
      user_id : 1,
      subject_id : subject_id
      
      
    })
  }
}
