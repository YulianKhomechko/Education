import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';
import { validate } from 'class-validator';

const products = [
  { title: 'Carptet', price: 200.99 },
  { title: 'book', price: 23.43 },
];

const p1 = new Product('Book', 2.99);

// const loadedProducts = products.map((prod) => new Product(prod.title, prod.price));
const loadedProducts = plainToClass(Product, products);

const newProd = new Product('', -7.99);
validate(newProd).then((errors) => {
  if (errors.length) {
    console.log('validation errors');
    console.log(errors);
  }
});

console.log(p1.getInformation());
console.log(loadedProducts);
console.log(newProd.getInformation());
