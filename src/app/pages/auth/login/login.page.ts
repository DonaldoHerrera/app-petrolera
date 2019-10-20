import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public loginForm: FormGroup;

    error_messages = {
        'email': [
            { type: 'required', message: 'Email es requerido' },
        ],
        'password': [
            { type: 'required', message: 'Contraseña es requerida' },
        ]
    }

    constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

    ngOnInit() {

        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
    onLogin(){
        
        if (this.loginForm.invalid) return;
        let data = JSON.parse(JSON.stringify(this.loginForm.value));
        this.auth.login(data).subscribe((res) => {
            console.log(res);

        }, ((error) => {
            console.log(error.message);
        }));
    }


}
