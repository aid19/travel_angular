export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    sale: number;
    days: number;
    imageUrl: string;

    constructor(id = 0, name = '', description = '', price = 0, sale = 0, days= 0, imageUrl = '' ) {
        this.id = id
        this.name = name
        this.description  = description
        this.price = price
        this.sale = sale
        this.days = days
        this.imageUrl = imageUrl
    }
}
