import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() studentid: any; 
  UserDetails:any
  constructor(private authenticate:AuthenticateService,private admin:AdminService ) { }
  result:any;
  ngOnInit(): void {
    console.log("inside home"+this.studentid)
  
    this.authenticate.getUser(this.studentid).subscribe(
      (response)=>{
       if(response!=null)
       {

        this.result=response;
        this.UserDetails=response;
        console.log(this.UserDetails);
        
       }
       else{
        alert("Incorrect username password");
       }
      }
    )
  }
  getResult(id:any)
  {
    this.admin.getResult(id).subscribe(
      (response)=>{
       if(response!=null)
       {
        this.result=response;

        console.log(response);
      //  this._route.navigate(['dashboard',response.id]);
       }
       else{
        alert("Incorrect username password");
       }
      }
    )
  }
  get resultVal():String
  {
    return this.result;
  }

  set resultVal(val:String)
  {
    this.result=val;
  }

}
