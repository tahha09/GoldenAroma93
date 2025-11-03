export interface Product {
  id: number;
  product_name: string;
  category: string;
  size: string | string[];
  dimensions_cm: string | string[];
  description: string;
  ingredients: string[];
  usage: string;
  features: string[];
  scent_variants: string[];
  expiry: string;
  price: number | { [key: string]: number };
  image: string;
  rating?: number;

}
