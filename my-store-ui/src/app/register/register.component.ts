import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  user:User;

  constructor(
    // private formBuilder: FormBuilder,
    private userService: UserService) {
      // this.registerForm = this.formBuilder.group({
      //   username:['', Validators.required]
      // });
      this.user = new User();
     }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.save(this.user);
  }

}
