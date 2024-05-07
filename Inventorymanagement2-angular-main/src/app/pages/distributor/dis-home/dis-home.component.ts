import { Component, OnInit } from '@angular/core';
import { LogindataService } from 'src/app/logindata.service';

@Component({
  selector: 'app-dis-home',
  templateUrl: './dis-home.component.html',
  styleUrls: ['./dis-home.component.css']
})
export class DisHomeComponent implements OnInit{

constructor(
  private loginDataService: LogindataService
){}

  ngOnInit(): void {
   
   
  }

  fullname2 :string= this.loginDataService.fullname;

 
  username = localStorage.getItem('username');
  password = localStorage.getItem('password');
  fullname = localStorage.getItem('fullname');
  uid = localStorage.getItem('uid');
  usertype = localStorage.getItem('usertype');
  photo = localStorage.getItem('photo');


  logout(){
    // this.loginDataService.logout()    // local storage use korai ai method call korar dorkar nai

// console.log("logout")



localStorage.setItem('isLoggedIn', 'false');
localStorage.setItem('username', '');
localStorage.setItem('password', '');
localStorage.setItem('fullname', '');
localStorage.setItem('uid', '');
localStorage.setItem('usertype','');
localStorage.setItem('photo','' );


  }

}
