import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-h-list',
  templateUrl: './h-list.component.html',
  styleUrls: ['./h-list.component.css']
})
export class HListComponent implements OnInit {

  City = '';
  // Price = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';


  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  onCityFilter() {
    this.SearchCity = this.City;
  }

  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }
  onSortDirection() {
    if(this.SortDirection === 'desc'){
      this.SortDirection = 'asc';
    }else {
      this.SortDirection = 'desc';
    }
  }

}
