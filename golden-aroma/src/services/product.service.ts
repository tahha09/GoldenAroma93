import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    if (this.products.length > 0) {
      return of(this.products);
    }
    return this.http.get<Product[]>('assets/data/products.json').pipe(
      map(products => {
        this.products = products;
        return products;
      })
    );
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.getAllProducts().pipe(
      map(products => products.find(p => p.id === id))
    );
  }

  searchProducts(query: string): Observable<Product[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(p =>
        p.product_name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      ))
    );
  }

  filterByCategory(category: string): Observable<Product[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(p => p.category === category))
    );
  }

  filterByPriceRange(min: number, max: number): Observable<Product[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(p => {
        if (typeof p.price === 'number') {
          return p.price >= min && p.price <= max;
        }
        return false; // Skip products with price as object for now
      }))
    );
  }
}
