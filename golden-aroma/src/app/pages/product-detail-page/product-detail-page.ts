import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail-page.html',
  styleUrls: ['./product-detail-page.scss']
})
export class ProductDetailPage implements OnInit {
  productId!: number;
  product?: Product;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (!id) {
        this.router.navigate(['/products']);
        return;
      }
      this.loadProduct(id);
    });
  }

  private loadProduct(id: number): void {
    this.loading = true;

    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        this.loading = false;

        if (!product) {
          this.router.navigate(['/products']);
        }
      },
      error: (err) => {
        console.error('Error loading product:', err);
        this.loading = false;
        this.router.navigate(['/products']);
      }
    });
  }

  

  goBack(): void {
    this.router.navigate(['/products']);
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
