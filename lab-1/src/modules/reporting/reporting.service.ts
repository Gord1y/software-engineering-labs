import { Injectable } from '@nestjs/common';
import { WarehouseService } from '../warehouse/warehouse.service';
import { ProductService } from '../product/product.service';

@Injectable()
export class ReportingService {
  constructor(private warehouse: WarehouseService) {}

  generateInventoryReport() {
    return this.warehouse.listProducts();
  }

  addProductToWarehouse(product: ProductService) {
    this.warehouse.addProduct(product);
  }
}
