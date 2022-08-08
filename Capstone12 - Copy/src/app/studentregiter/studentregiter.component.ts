import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
import { User } from '../user';

@Component({
  selector: 'app-studentregiter',
  templateUrl: './studentregiter.component.html',
  styleUrls: ['./studentregiter.component.css']
})
export class StudentregiterComponent implements OnInit {

  registration=this.formBuilder.group({firstname:['',[Validators.required]],
  lastname:['',[Validators.required]],
  username:['',[Validators.required]],
  password:['',[Validators.required]],
  email:['',[Validators.required]],
  phno:['',[Validators.required]],
  address:['',[Validators.required]]
});
  contactForm: any;
  constructor(private formBuilder:FormBuilder,private authenticate:AuthenticateService,private _route:Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    
    let student= new User(this.registration.value['firstname'],this.registration.value['lastname'],
    this.registration.value['username'],this.registration.value['password']
    ,this.registration.value['email'],this.registration.value['phno'],this.registration.value['address']);
    this.authenticate.register(student).subscribe(
      (response)=>{
        this._route.navigate(['']);
      }
    )
    }
  
  
  }
 
