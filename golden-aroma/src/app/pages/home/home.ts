import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe(products => {
      this.featuredProducts = products.slice(0, 6);
    });
  }
  getPriceKeys(price: number | { [key: string]: number }): string[] {
  if (typeof price === 'object' && price !== null) {
    return Object.keys(price);
  }
  return [];
}

getPriceValue(price: number | { [key: string]: number }, key: string): number {
  if (typeof price === 'object' && price !== null) {
    return price[key];
  }
  return 0;
}

}
