import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  displayedColumns: string[] = ['FirstName', 'LastName' ,'Phone Number','Email',"Address" ];
  constructor(private  admin:AdminService) { }
  studentsDetails:any;
  ngOnInit(): void {

    this.admin.getAllStudents( ).subscribe(
      (response)=>{
       if(response!=null)
       {

        this.studentsDetails=response;
        console.log(this.studentsDetails);
        
       }
       else{
        alert("Incorrect username password");
       }
      }
    )
  }



}
