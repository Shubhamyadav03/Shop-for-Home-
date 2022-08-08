import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Result } from '../result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  studentsDetails:any;
  selectedFiles!: FileList;
   filetoupload!: File|null;
  constructor(private admin:AdminService,private formBuilder:FormBuilder) { }
  result=this.formBuilder.group({studentId:['',[Validators.required]],
  studentresult:['',[Validators.required]]});
  ngOnInit(): void {
    this.admin.getAllStudents( ).subscribe(
      (response)=>{
       if(response!=null)
       {

        this.studentsDetails=response;
        console.log(this.studentsDetails);
        
       }
       else{
        alert("Data is not loading");
       }
      }
    )
  }
  onSubmit()
  {
    

  }
  selectFile(event:any)
  {
  //  const file=event.target.files.item(0);
this.selectedFiles=event.target.files;
  }

}
