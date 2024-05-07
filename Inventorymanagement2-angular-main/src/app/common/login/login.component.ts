
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdLogin } from 'src/app/model/admin/ad-login.model';
import { AdLoginvalidationService } from 'src/app/service/admin/ad-loginvalidation.service';
import { AdLoginRegistration } from 'src/app/model/admin/ad-loginregistration.model';
import { AdDistributor } from 'src/app/model/admin/ad-distributor.model';
import { LogindataService } from 'src/app/logindata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  adminbutton: boolean = true;
  warehousebutton: boolean = false;
  distributorbutton: boolean = false;

  addForm!:FormGroup;

  products !: AdLogin[];

  buttonview:boolean=true;




constructor( private router : Router , 
  public loginService: AdLoginvalidationService,
  public loginDataSaveService: LogindataService
  ){}


  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password2: new FormControl('', Validators.required)
    });
   
  }
 
abc!: AdLoginRegistration;

  login(){
    //console.log(this.addForm.value);
    this.loginService.submit(this.addForm.value).subscribe((res:any) => {
      this.abc=res;
      if(this.abc!=null){
        console.log('Post created successfully!');             //   , this.abc ) can use for print
        this.router.navigateByUrl('/ad-home');
      }else{ 
        console.log("Login Failed");
      }
    
 });
  
  }

  dis!: AdDistributor;


  login2(){
    

    this.loginService.dislogin(this.addForm.value).subscribe((res:any)=>{
      
      if(res!==null){
      this.dis=res;
      const username= res.username;
      const password=res.password2
      const fullname= res.name
      const uid= res.id
      const usertype = res.usertype
      const photo ="photo"      // though photo is null
     // console.log("response", username,password ,fullname,uid,photo)
     // this.loginDataSaveService.loginDataSave(username, password,uid,photo,fullname,usertype)    // LOcal storage use korai ai method call korar dorkar nai
      
         


          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', res.username);
          localStorage.setItem('password', res.password2);
          localStorage.setItem('fullname', res.name);
          localStorage.setItem('uid', res.id);
          localStorage.setItem('usertype', res.usertype);
          localStorage.setItem('photo',photo );
          
          this.router.navigateByUrl('/dis-home');
          console.log('Login created successfully!');  


    }else{ 
      console.log("Login Failed");
    }

      if(this.dis!==null){
       // console.log('Login created successfully!');  
        // this.loginDataSaveService.loginDataSave(this.dis.username, this.dis.password2,this.dis.name,this.dis.id,this.dis.photo)           //   , this.abc ) can use for print
        // this.router.navigateByUrl('/dis-home');
      }
    })
   

   

//     this.loginService.submit(this.addForm.value).subscribe((res:any) => {
//       this.abc=res;
//       if(this.abc!=null){
//         console.log('Post created successfully!');             //   , this.abc ) can use for print
//         this.router.navigateByUrl('/dis-home');
//       }else{ 
//         console.log("Login Failed");
//       }
    
//  });



  }



  adminview (){
    this.buttonview=true
  }
  distributorview(){
    this.buttonview=false

  }





// login(){
//   if(this.loginObj.userName=='Admin' && this.loginObj.password=='123'){
//   this.router.navigateByUrl('ad-home');
//     }else if(this.loginObj.userName=='Admin' && this.loginObj.password=='456'){
//       this.router.navigateByUrl('ware-home');

//     }else if(this.loginObj.userName=='Admin' && this.loginObj.password=='789'){
//       this.router.navigateByUrl('dis-home');

//     }else{ alert('Wrong Password')}
  
// }



default (){
   this.router.navigateByUrl('/dis-home');       //21/02/23

}


admin(){
this.router.navigateByUrl('home');

}

}



