import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;

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

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      //confirmpassword: ['', [Validators.required]],
    });
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    //console.warn(this.profileForm.value);
    alert("register");
  }
  onRegister(){
        
    if (this.registerForm.invalid) return;
    let data = JSON.parse(JSON.stringify(this.registerForm.value));
    this.auth.register(data).subscribe((res) => {
        console.log(res);

    }, ((error) => {
        console.log(error.message);
    }));
}
}
