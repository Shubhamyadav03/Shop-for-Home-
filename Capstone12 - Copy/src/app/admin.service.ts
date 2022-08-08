import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from './result';
import { User } from './user';
 


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  result(result: Result) {
    throw new Error('Method not implemented.');
  }
  updateUser(id: any, contact: User) {
    throw new Error('Method not implemented.');
  }
  getUser(id: any) {
    throw new Error('Method not implemented.');
  }
  apiUrl:string="http://localhost:8080/";
  constructor(private http: HttpClient) { }
  getAllStudents()
  {
    return this.http.get(this.apiUrl+"details" );
  }
  addProduct(data:any):Observable<any>{
   console.log(data);
    return this.http.post(this.apiUrl+"addproducts",data);
}

 
uploadFile(file:any,id:number):Observable<any>{
   
  const data:FormData=new FormData();
  data.append('file',file);
   return this.http.post(this.apiUrl+"fileupload/"+id,data);
}
getResult(id:string):Observable<any>{
 
  return this.http.get(this.apiUrl+"getResult?id="+id );
}

}
