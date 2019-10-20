import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private api = new Api();

  constructor(private http: HttpClient) { }

  getUsersOnline(){
    console.log(this.api.getUrlUsersOnline())
    return this.http.get(this.api.getUrlUsersOnline());
  }
}
