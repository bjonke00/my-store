export class Product{
    id: number;
    name: string;
    price: number;
    desc: string;
    quantity: number;
    img: string;

    constructor(id:number,name:string,price:number,desc:string,quantity:number,img:string){
        this.id=id;
        this.name=name;
        this.price=price;
        this.desc=desc;
        this.quantity=quantity;
        this.img=img;
    }
}