import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public perfilForm: FormGroup;

  error_messages = {
    'email' : [
      { type: 'required', message : 'Email es requerido'},
    ],
    'password' : [
      { type: 'required', message : 'Contraseña es requerida'},
    ],
    'confirmpassword' : [
      { type: 'required', message : 'Contraseña es requerida'},
    ],
    'username' : [
      { type: 'required', message : 'Nombre de usuario es requerido'},
    ],
    'name' : [
      { type: 'required', message : 'Nombre es requerido'},
    ],
    'lastname' : [
      { type: 'required', message : 'Apellido es requerido'},
    ],
  }

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit(){
    this.perfilForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmpassword: ['', [Validators.required]],
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.profileForm.value);
    alert("perfil");
  }
  logout(){
    this.auth.logout().subscribe((res:any)=>{
      console.log(res);
    },(error)=>{
      console.log(error.message);
    });
  }
}
