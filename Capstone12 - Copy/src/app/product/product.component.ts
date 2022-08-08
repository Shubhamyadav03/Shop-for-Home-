import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  items: item[]=[
    {
        id: 0,
        name: "iPhone X",
        description: " The naming of the iPhone X is to mark the 10th anniversary of the iPhone.",
        imageUrl: "https://www.bing.com/th?id=OIP.Zlys5llMN5BjhWenLiJbSQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        price: 54000
    },
    {
        id: 1,
        name: "iPhone 11",
        description: "The iPhone 11 is available in six colors: Purple, Yellow, Green, Black, White, and Product (Red).",
        imageUrl: "https://th.bing.com/th/id/OIP.tHyk6ewieuuADTzBEZ30TgHaHa?w=212&h=212&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        price: 61000
    },
    {
        id: 2,
        name: "Macbook",
        description: "The MacBook is a brand of Macintosh notebook computers designed and marketed by Apple Inc. ",
        imageUrl: "https://www.bing.com/th?id=OIP.B_642VESX88x3GTyo4miwAHaHa&w=160&h=160&rs=1&qlt=80&o=6&dpr=1.5&pid=3.1",
        price: 70000
    },
    {
        id: 3,
        name: "Macbook Air",
        description: "The Intel-based MacBook Air was introduced in January 2008 with a 13.3-inch screen, and was promoted as the world's thinnest notebook, opening a laptop category known as the ultrabook family. ",
        imageUrl: "https://th.bing.com/th/id/OIP.sNe5XeEVhYACCDAdhA7JFwHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        price: 90000
    },
    {
        id: 4,
        name: "Macbook Air 2013",
        description: "The MacBook Air is a line of notebook computers developed and manufactured by Apple Inc. ",
        imageUrl: "https://static.swappa.com/media/listing/LTNY57200/qODzKQWr.jpg",
        price: 60000
    },
    {
        id: 5,
        name: "Macbook Air 2012",
        description: "The MacBook Air is a line of notebook computers developed and manufactured by Apple Inc. ",
        imageUrl: "https://www.techspot.com/articles-info/553/images/5.jpg",
        price: 55000
    }
  ]
  }
    class item
    {
      id!:number;
      name!:string;
      description!:string;
      imageUrl!:string;
      price!:number;
    }