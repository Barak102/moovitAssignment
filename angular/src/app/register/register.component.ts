import { RegisterService } from './../register.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userDetails: User = {
    name: '',
    email: '',
    password: '',
    termsAndConditions: false
  };

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  registerCommand(): void {
    this.registerService.register(this.userDetails);
  }

}
