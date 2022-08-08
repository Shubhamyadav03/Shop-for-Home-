
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Product } from '../product';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private admin:AdminService) { }
  teacherreg=this.formBuilder.group({productname:['',[Validators.required]],
  quality:['',[Validators.required]],
  quantity:['',[Validators.required]],
  category:['',[Validators.required]],
 
});
  ngOnInit(): void {
  }
  onSubmit()
  {
    let teacher= new Product(this.teacherreg.value['productname'],this.teacherreg.value['quality'],
    this.teacherreg.value['quantity'],this.teacherreg.value['category']
    );
    
    this.admin.addProduct(teacher).subscribe(
      (response)=>{
       // this._route.navigate(['']);
      }
    )
    }
  
  

  }
 