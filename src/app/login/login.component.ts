import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // properties
  // ? sting interpolation
  aim = "perfect banking partner"

  acno = ""
  pswd = ""

  // ? property binding
  placeholderText = "enter account number"

  // data
  // db:any = {
  //   1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000 },
  //   1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000 },
  //   1002: { "acno": 1002, "username": "Vypm", "password": 1002, "balance": 3000 }
  // }

  
  // ? dependency injection access specifier public or private  property-name:Router(pre-defined)
  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }

  // user defined functions

  //?event binding
  //? login() {
  //?   alert('login clicked');
  //? }


  // acnoChange(event: any) {
  //   this.acno = event.target.value;
  //   console.log(this.acno);
  // }

  // pswdChange(event: any) {
  //   this.pswd = event.target.value;
  //   console.log(this.pswd);
  // }

  // login() {
  //   let acno = this.acno
  //   let pswd = this.pswd
  //   let db = this.db

  //   if (acno in db) {
  //     if (pswd == db[acno]["password"]) {

  //       alert("login successdul")

  //     } else {

  //       alert("incorrect passsword")
  //     }

  //   } else {

  //     alert("user does not exist")
  //   }
  // }

  // ? template reference variable
  // ? use any var but number of var should be same as assinged
  // ? here a return node of event , so a.value gives acno
  // login(a:any, b:any) {
  //   let acno = a.value;
  //   let pswd = b.value;

  //   let db = this.db

  //   if (acno in db) {
  //     if (pswd == db[acno]["password"]) {

  //       alert("login successdul")

  //     } else {

  //       alert("incorrect passsword")
  //     }

  //   } else {

  //     alert("user does not exist")
  //   }
  // }

  // ? two way binding ngmodel

  login() {
    let acno = this.acno;
    let pswd = this.pswd;

    // let db = this.db
    const result = this.ds.login(acno, pswd)

    if (result) {
        alert("login successdul")
        this.router.navigateByUrl('dashboard')
    }
  }

  
}
