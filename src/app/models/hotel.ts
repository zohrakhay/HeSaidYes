export class Hotel {
    name:string;
    location:string;
    src1:string;
    src2:string;
    src3:string;
    src4:string;
    src5:string;
    stars:number;
    price:number;
    date_arrivée:string;
    date_départ:string;

    constructor(name="", location="",src1="src/assets/img/bedrooms/pexels-la-miko-3754595.jpg",src2="src/assets/img/bedrooms/pexels-la-miko-3754595.jpg",src3="src/assets/img/bedrooms/pexels-la-miko-3754595.jpg",src4="src/assets/img/bedrooms/pexels-la-miko-3754595.jpg",src5="src/assets/img/bedrooms/pexels-la-miko-3754595.jpg",stars=4, price=400, date_arrivée="25/06/2021", date_départ="28/06/2021"){
    this.name=name;
    this.location=location;
    this.src1=src1;
    this.src2=src2;
    this.src3=src3;
    this.src4=src4;
    this.src5=src5;
    this.stars=stars;
    this.price=price;
    this.date_arrivée=date_arrivée;
    this.date_départ=date_départ;
    }
}
