export class Teacher {
    firstname:string;
    lastname:string;
    subject:string;
    qualification:string;
    email:string; 
    address:string;
    phno:number;
    constructor( firstname:string,lastname:string, subject:string,qualification:string,email:string,address:string,phno:number)
    {
        this.firstname=firstname;
        this.lastname=lastname;
       
        this.subject=subject;
        this.qualification=qualification;
        this.email=email;
        this.address=address;
        this.phno=phno;
     
    }
  
}
