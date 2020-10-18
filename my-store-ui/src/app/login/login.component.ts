import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private loginService: LoginService) { 

            this.loginForm = this.formBuilder.group({
              user:['', Validators.required],
              pw:['', Validators.required]
            });

  }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.onSubmit(this.loginForm.value.user,this.loginForm.value.pw,this.loginForm.status);
  }
 

}
