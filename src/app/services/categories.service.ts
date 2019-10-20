import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private auth = new Api();

  constructor(private http: HttpClient) { }

  public getCategories() {
    return this.http.get(this.auth.getUrlCategory());
  }

}
