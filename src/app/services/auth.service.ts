import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../../api/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = new Api();
  constructor(private http: HttpClient) { }

  login(data:any){
    console.log(this.api.getUrlLogin())
        return this.http.post(this.api.getUrlLogin(),{
            email:data.email,
            password:data.password
        });

  }
  register(data:any){
    console.log(this.api.getUrlRegister())
        return this.http.post(this.api.getUrlRegister(),{
            username:data.username,
            name:data.name,
            lastname:data.lastname,
            email:data.email,
            password:data.password,
            //confirmpassword:data.confirmpassword
        });

  }
  logout(){
    return this.http.put(this.api.getUrlLogout(3),{});
    
  }
}
