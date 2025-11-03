import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { ProductDetailPage } from './pages/product-detail-page/product-detail-page';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';


export const routes: Routes = [
  { path: '', component: Home, title: 'Golden Aroma - Natural Beauty Products' },
  { path: 'products', component: Products, title: 'Products - Golden Aroma' },
  { path: 'product/:id', component: ProductDetailPage, title: 'Product Details - Golden Aroma' },
  { path: 'about', component: About, title: 'About Us - Golden Aroma' },
  { path: 'contact', component: Contact, title: 'Contact Us - Golden Aroma' },
  { path: '**', redirectTo: '' }

]
