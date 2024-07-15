import { Injectable } from '@nestjs/common';
import { ProductService } from '../product/product.service';

@Injectable()
export class WarehouseService {
  private products: ProductService[] = [];

  addProduct(product: ProductService) {
    this.products.push(product);
  }

  listProducts() {
    return this.products;
  }

  findProductByName(name: string): ProductService | undefined {
    return this.products.find((product) => product.getName() === name);
  }
}
