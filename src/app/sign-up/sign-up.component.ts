import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{
	
	userModel=new User('John', '123@gmail.com', '')
	
	constructor(private router:Router){}
	

signUp(){
    console.log(this.userModel);
	alert("You have successfully signed up!");
	this.router.navigate(['ThankYou']);
};
	
}