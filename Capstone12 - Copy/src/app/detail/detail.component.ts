import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  constructor(private _Activatedroute:ActivatedRoute,private authenticate:AuthenticateService) { }
  studentId:any;
  studentDetails :any;
  ngOnInit(): void {
     this._Activatedroute.paramMap.subscribe(params=>
      {

        this.studentId=params.get("id");
       
      })

  }

}
