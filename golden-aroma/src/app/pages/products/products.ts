import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
})
export class Products implements OnInit {
  products: { id: number; name: string; price: number; image: string }[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products.map(p => ({
          id: p.id,
          name: p.product_name,
          price: typeof p.price === 'number' ? p.price : Number(Object.values(p.price)[0] ?? 0),
          image: p.image || 'assets/images/placeholder.png'
        }));
      },
      error: (err) => {
        console.error('Failed to load products', err);
      }
    });
  }
}
