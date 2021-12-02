import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product'

const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[] = [
  //   new Product(1, 'Product 1', 'This is the product 1 description. The product is real cool!', 100),
  //   new Product(2, 'Product 2', 'This is the product 2 description. The product is real cool!', 150),
  //   new Product(3, 'Product 3', 'This is the product 3 description. The product is real cool!', 50),
  //   new Product(4, 'Product 4', 'This is the product 4 description. The product is real cool!', 200),
  //   new Product(5, 'Product 5', 'This is the product 5 description. The product is real cool!', 100),
  //   new Product(6, 'Product 6', 'This is the product 6 description. The product is real cool!', 150),
  //   new Product(7, 'Product 7', 'This is the product 7 description. The product is real cool!', 250),
  //   new Product(8, 'Product 8', 'This is the product 8 description. The product is real cool!', 300),
  // ]

  constructor(private http: HttpClient ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl);
  }
}
