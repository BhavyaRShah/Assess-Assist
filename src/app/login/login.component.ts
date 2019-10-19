import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ""
  password = ""
  invalidLogin = false
  errorMsg = "Invalid Credentials"
 
  constructor(private router: Router) {
   }

  ngOnInit() {
  }
  isCorrect(){
    if(this.username=="test" && this.password=="demo")
    {
      this.invalidLogin = false
      this.router.navigate(['welcome',this.username])
    }
    else
      this.invalidLogin=true

  }


}
