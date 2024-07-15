import { Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [ProductModule],
  providers: [WarehouseService],
  exports: [WarehouseService],
})
export class WarehouseModule {}
