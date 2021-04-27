
export class Medicine{
    name:String;
    price : Number;

    constructor(name:String,price:Number){
        this.name = name;
        this.price = price;
    }
}

export const medicines : Medicine[] = [
  
];

export class Order{
    medicines:Medicine[];
    constructor(medicines:Medicine[]){
        this.medicines = medicines;
    }
}
export const cartitems : Medicine[] = [];
export const orders : Order[] = [];