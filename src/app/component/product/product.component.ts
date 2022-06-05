import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor( private prodService: ProductService) { }

  ngOnInit(): void {
    this._getProducts();
  }
  private _getProducts() {
    this.prodService.getEmployeeList().subscribe((res) => {
      this.prodService.employees = res as Product[];
      this.products=res as Product[]
    });
  }

}
