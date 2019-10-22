import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../service/data/admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  username = ""
  password = ""
  constructor(private service:AdminLoginService) { }

  ngOnInit() {
  }

  validate(){
    this.service.getCredentials();
  }
}
