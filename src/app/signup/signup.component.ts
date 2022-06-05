import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupform!: FormGroup;
  isSubmitted = false;
  currentUserId!: string;
  constructor( private formBuilder: FormBuilder,private usersService: UserService,private router:Router) { }

  ngOnInit(): void {
    this._initUserForm();
  }
  private _initUserForm() {
    this.signupform = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      
    });
  }
  private _addUser(user: User) {
    this.usersService.postEmployee(user).subscribe(
      (user: User) => {
       
      }
    );
  }
  onsubmit()
  { this.isSubmitted = true;
    if (this.signupform.invalid) {
      return;
    }
    const user: User = {
      id: this.currentUserId,
      name: this.signupform.controls['name'].value,
      email: this.signupform.controls['email'].value,
      password: this.signupform.controls['password'].value,
     
    };
    
      this._addUser(user);
      this.router.navigate(['login'])
      this.signupform.reset()
    

  }


}
