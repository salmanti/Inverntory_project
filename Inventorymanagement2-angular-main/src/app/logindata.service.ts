import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})




export class LogindataService {

  constructor() { }


  isLoggedIn = false;
  
  username = '';
  password='';

  fullname!:string;
  userid=0;
  usertype=''
  userphoto='';


  loginDataSave(username: string, password: string, userid:number ,uphoto:string, fullname:string, usertype:string): void {
   
    this.isLoggedIn = true;
    this.username = username;
    this.password=password;
    this.fullname= fullname;
    this.userid= userid;
    this.usertype= usertype
    this.userphoto= uphoto;
    console.log(" login service response","username", this.username, "pass",this.password , "fullname :",this.fullname,"id :",this.userid,"Photo > ", this.userphoto, "usertype",this.usertype)
  }

  logout(): void {
    // perform logout logic here
    this.isLoggedIn = false;
    this.username = '';
    this.password='';

    this.fullname='';
    this.userid=0;
    this.userphoto='';
    console.log(" logout service response", this.username, this.password , this.fullname,"userid",this.userid, this.userphoto, this.usertype)
  }



}
