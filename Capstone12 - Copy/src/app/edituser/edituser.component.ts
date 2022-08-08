import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { Users } from '../users';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  updateForm=this.formBuilder.group
  ({firstname:['',[Validators.required]],lastname:['',[Validators.required]],
  email:['',[Validators.required]],address:['',[Validators.required]]});
  id:any;
  user:any=[];
  constructor(private formBuilder:FormBuilder,private _Activatedroute:ActivatedRoute,private _route:Router,private auth:AuthenticateService) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params=>{
      this.id=params.get("id");
      this.auth.getUser(this.id).subscribe(
        (response)=>{
        if(response!=null)
        {
         this.user=response;
        }
        else{
         alert("empty");
        }
      })
    })
  }
  onSubmit(){
  
   let user=new Users(this.updateForm.value['firstname'],this.updateForm.value['lastname'],this.updateForm.value['email'],this.updateForm.value['address']);
   this.auth.updateUser(this.id,this.user).subscribe(
    (response)=>{
      this._route.navigate(['admindashboard/']);
    }
    
  )
  }
}
