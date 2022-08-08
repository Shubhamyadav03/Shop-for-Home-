export class User {
    firstname:string;
    lastname:string;
    username:string;
    password:string;
    email:string;
    phno:number;
    address:string
    constructor( firstname:string,lastname:string, username:string,password:string,email:string,phno:number,address:string)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.username=username;
        this.password=password;
        this.address=address;
        this.phno=phno;
        this.email=email;
    }
}
