import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ad-subcategory',
  templateUrl: './ad-subcategory.component.html',
  styleUrls: ['./ad-subcategory.component.css']
})
export class AdSubcategoryComponent  implements OnInit {
  
  btnvisibility: boolean = true;
  createform: boolean = false;
Productformlabel: string = 'Add Warehouse';  
  empformbtn: string = 'Save'; 
  
  addForm!:FormGroup;

  
  ngOnInit(): void {
    
  }

  


  addWarehouse(){};
  updateWarehouse(){};
}
