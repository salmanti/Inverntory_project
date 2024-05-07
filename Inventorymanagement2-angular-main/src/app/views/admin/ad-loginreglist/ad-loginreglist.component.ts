import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdLoginRegistration } from 'src/app/model/admin/ad-loginregistration.model';
import { AdLoginregService } from 'src/app/service/admin/ad-loginreg.service';

@Component({
  selector: 'app-ad-loginreglist',
  templateUrl: './ad-loginreglist.component.html',
  styleUrls: ['./ad-loginreglist.component.css']
})
export class AdLoginreglistComponent implements OnInit{
 
  
  id!: number;
  post!: AdLoginRegistration;
  posts: AdLoginRegistration[] = [];

  constructor(
    public loginService: AdLoginregService,private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.loginService.getAll().subscribe((data: AdLoginRegistration[])=>{
      this.posts =data;
    })
  }
  deletePost(id:number){
    this.loginService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
      
    })
   
  }

  

}
